const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo =require ("../db-food/userdb")

router.get('/', (req, res) => {
  res.send("user router");
});


router.get('/defult', (req, res) => {
  mongo.creatdefult((result) => {
    res.json(result);
  })
});

////////////newuser
router.post('newuser', (req, res) => {
 
   let name = encodeURIComponent(req.params.name);
   let phone = encodeURIComponent(req.params.phone);
   let password = encodeURIComponent(req.params.password);

   console.log("helloooooooooooooooooooo server");
   console.log("server",name,phone,password);
  
   mongo.newuser((result) => {
      res.json(result);
    },name,phone,password)
 });



/// new user 
 router.post('/newuser', (req, res) => {
  // console.log("server",name,phone,password);

  let newuser = req.body;
  mongo.newpost(newuser, (result) => {
     res.json(result);
   })
});





//////////////getall
router.get('/all', (req, res) => {
  mongo.getall((result) => {
    res.json(result);
  })
});


////////////////getlogin
router.get('/:name/:password', (req, res) => { 
  let name = encodeURIComponent(req.params.name);
  let password = encodeURIComponent(req.params.password);

  console.log("login");

  mongo.getlogin((result) => {
    res.json(result);
  },name,password)
});


module.exports = router;
