const mysqlQueryExecuter = require('../lib/mysqlQueryExecuter');

var User = function (params) {
  this.id = params.id;
  this.name = params.name;
  this.email = params.email;
  this.subject = params.subject;
  this.message = params.message;
  this.password = params.password;
  this.date = params.date;
  this.disease = params.disease;
  this.number = params.number;

};

User.prototype.submit = async function () {
    const that = this;
  
    const Query = `INSERT INTO contact (name, email, subject, message) VALUES (?,?,?,?);`;
    const Values = [that.name, that.email, that.subject, that.message]
    // console.log(Query)
    const { result } = await mysqlQueryExecuter({ Query, Values });
    return result;
};


User.prototype.register = async function () {
  const that = this;

  const Query = `INSERT INTO register (name, email, password) VALUES (?,?,?);`;
  const Values = [that.name, that.email, that.password];
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
};


User.prototype.login = async function () {
  const that = this;

  const Query = `SELECT * FROM register WHERE email = ?`;
  const Values = [that.email];
  // console.log(Query);
  // console.log(Values);
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
};


User.prototype.getContact = async function () {
  const that = this;

  const Query = `SELECT * FROM contact`;
  
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query});
  return result;
};

User.prototype.showAppointment = async function () {
  const that = this;

  const Query = `SELECT * FROM appointment`;
  
  // console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query});
  return result;
};

User.prototype.appointment  = async function () {
  const that = this;

  const Query = `INSERT INTO appointment (name, email, date, disease, number, message) VALUES (?,?,?,?,?,?)`;
  const Values = [that.name, that.email, that.date, that.disease, that.number, that.message]
  //console.log(Query)
  const { result } = await mysqlQueryExecuter({ Query, Values });
  return result;
};



module.exports = User;


