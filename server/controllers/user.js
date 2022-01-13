const User = require('../models/user');

const submit = async (req, res, next) => {
  try {
    const params = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.submit();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}


const register = async (req, res, next) => {
  try {
    const params = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, 
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.register();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}


const login = async (req, res, next) => {
  try {
    const params = {
      email: req.body.email,
      password: req.body.password,
    }
    //  console.log(params);
    const UserModel = new User(params);
    const result = await UserModel.login();
    if (result.length > 0) {
      if (params.password == result[0].password) {
        // res.send("You are logged in!.");
        // res.send({ loggedIn: true, email: params.email , message : "you are logged in"});
        res.send({ loggedIn: true, email: params.email });
      } else {
        res.send({ loggedIn: false, message: "wrong email password combo!.." });
        // res.send("wrong email password combo!..");
      }
    } else {
      res.send({ loggedIn: false, message: "user doesnt exist!.." });
      // res.send("user doesnt exist");
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
}


const getContact = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.getContact();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}

const showAppointment = async (req, res, next) => {
  try {
    const params = {
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.showAppointment();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}





const appointment  = async (req, res, next) => {
  try {
    const params = {
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
      disease: req.body.disease,
      number: req.body.number,  
      message: req.body.message,
    }
    // console.log(params);
    const UserModel = new User(params);
    const ress = await UserModel.appointment ();
    res.send(ress);
  } catch (err) {
    next(err);
  }
}



module.exports = {
  submit,
  register,
  login,
  getContact,
  appointment,
  showAppointment,
}