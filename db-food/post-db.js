

const db =require("../database")

////////////creatdefult
let creatdefult = (cb) => {
  db.fooddata.create(
    {namefood: "xgfbhfzdb",
      amount:"Strid\sfzdfhhgng",
      description: "xfyjchjbString",
      location:"chnmghvString",
      booking: true,
},(err, data) => {
  
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}
let creatpost = (newPost,cb) => {
  console.log('newPost', newPost)
  db.fooddata.create(newPost,(err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
  
}


/////////newpost
let newpost=(cb,namefood,description,location,booking) =>{
db.fooddata.create(
  {
    namefood: namefood,
  description: description,
  location: location,
  booking: booking,
  },(err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

let create = (newpost ,cb) => {
  db.fooddata.create(newpost, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}
///////getallpost
let getallpost = (cb) => {
db.fooddata.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
  }



  ///////////updatepost
   let  updatepost = (cb,bookedup) => {
      db.fooddata.updateOne( {numpost:bookedup} ,  { $set: { booking: true }}, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log("data:", data);
          getallpost(cb);
        }
      });
    };



  module.exports = {
    creatdefult,
    newpost,
    create,
    create,
    getallpost,
    updatepost,
    creatpost   
  }
