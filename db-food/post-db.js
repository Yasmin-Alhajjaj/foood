

const db =require("../database")

////////////creatdefult
let creatdefult = (cb) => {
  db.fooddata.create(
    {numpost:1,
   name: "mansaf",
  description:"thjhdcsvbgnhnggbfvf",
  booking: true,

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
    create,
    getallpost,
    updatepost   
  }
