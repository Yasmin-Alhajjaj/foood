
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

/////ahmad///////newuser
 router.post('/:firstName/:lastName/:phone/:email/:password', (req, res) => {
////////////newuser
//router.post('newuser', (req, res) => {
 
   let firstName = (req.params.firstName);
   let lastName = (req.params.lastName);
   let phone = (req.params.phone);
   let email = (req.params.email);
   let password = (req.params.password);

   console.log("helloooooooooooooooooooo server");
   console.log("server",firstName,lastName,phone,email,password);
  
   mongo.newuser((result) => {
      res.json(result);
    },firstName,lastName,phone,email,password)
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



router.post("/signIn", (req, res) => {
  console.log("ASDADS", req.body)
  const user = req.body;
  console.log("user", user);
  mongo.authUser(user, response => {
    console.log("response", response);
    res.json(response);
    // response.length > 1 ? res.json(true) : res.json(false);
  });
});


///////ahmad///////getlogin
router.get('/:firstName/:email/:password', (req, res) => {
  let firstName = (req.params.firstName); 
  let email = (req.params.email);
  let password = (req.params.password);

  console.log("login");
  console.log('server', firstName)
  console.log('email', email)
  console.log('password', password)

  mongo.getlogin((result) => {
    res.json(result);
  },firstName,password)
});


module.exports = router;