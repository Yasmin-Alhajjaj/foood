  
const db = require("../database");
console.log("db:", db);


///////creatdefult
let creatdefult = (cb) => {
  db.userdata.create(
   {name: "yasmin",
    phone: 0772501473,
    password:"111aaa"},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

///////////////newuser
let newuser = (cb,name,phone,balance,password) => {
  db.userdata.create({ name: name,
    phone: phone,
    balance:balance,
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



//////////////getlogin
let getlogin = (cb,name,password) => {
  db.userdata.find({name:name , password:password}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
};


module.exports = {
  creatdefult,
    newuser,
    getall,
    getlogin,
    newpost
};
