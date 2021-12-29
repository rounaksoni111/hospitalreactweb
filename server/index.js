
const express = require('express');
const path = require('path');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');


// imports
const { env, ServerPort } = require('./lib/config');

const app = express();

app.use(bodyParser.json({ limit: '15360mb', type: 'application/json' }))
app.use(bodyParser.urlencoded({ limit: '15360mb', extended: true, type: 'application/json', parameterLimit: 5000000 }))

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Point static path to dist
// -------------------------------
if (env === 'dev' || env === 'uat' || env === 'build') {
    app.use('/', express.static(path.join(__dirname, 'build')));
    app.use('/build', express.static(path.join(__dirname, 'build')));
} else if (env === 'test') {
    app.use('/', express.static(path.join(__dirname, '..', 'build')));
    app.use('/build', express.static(path.join(__dirname, '..', 'build')));
} else {
    app.use('/', express.static(path.join(__dirname, '..', 'src')));
    app.use('/src', express.static(path.join(__dirname, '..', 'src')));
}
  

app.use("/api/v1/user", require("./routes/user"));
app.use('/api/get-file', require('./utils/getDownloadFile'));

app.use("/upload", require("./routes/upload"));



app.use('/', require('./routes'));


const server = http.createServer(app);
server.listen(ServerPort, async () => {
  console.log('server is running on port: ', ServerPort);
});