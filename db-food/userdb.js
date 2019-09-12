  
const db = require("../database");
console.log("db:", db);


///////creatdefult
let creatdefult = (cb) => {
  db.userdata.create(
   {firstName: "yasmin",
    lastName: "Alhajjaj",
    phone: 1234567890,
    email:"yasmin.alhajjaj@gmail.com",
    password:"123456"},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

//////ahmad///////newuser
let newuser = (cb,firstName,lastName,phone,email,password) => {
  db.userdata.create({ firstName: firstName,
    lastName:lastName,
    phone: phone,
    email:email,
    password:password},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}



let newpost = (newuser,cb) => {
  db.userdata.create(newuser, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

///////////getall
let getall = cb => {
  db.userdata.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
};



/////ahmad///////getlogin
let getlogin = (cb,firstName,password) => {
  db.userdata.find({firstName:firstName , password:password}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
};

let authUser = (user, cb) => {
  console.log("user DATABASE", user);
  db.userdata.find(
    {
    email: user.email,
    password: user.password },
    (error, response) => {
      if (error) {
        cb(error);
      } else {
        console.log('response: ', response)
        cb(response);
      }
    }
  );
};


module.exports = {
  creatdefult,
     newuser,
    getall,
    getlogin,
    authUser,
    newpost
};