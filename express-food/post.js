const express = require("express");
const cors = require("cors");

var router = express.Router();

const mongo =require ("../db-food/post-db")


/////////////////////
router.get('/', (req, res) => {
  res.send("recipe router");
});

///////////creatdefult
router.get('/defult', (req, res) => {
  mongo.creatdefult((result) => {
    res.json(result);
  })
});

router.post('/posts', (req, res) => {
  let newUser = req.body;

  mongo.create(newUser, (result) => {
      res.json(result);
  })
});

/////////getallpost
router.get('/all', (req, res) => {
mongo.getallpost((result) => {
   res.json(result);
 }) 
 });
 

/////////updatepost
router.put('/:bookedup', (req, res) => {

  let bookedup = encodeURIComponent(req.params.bookedup);
  console.log("update",bookedup)

  mongo.updatepost((result) => {
    res.json(result);
  },bookedup)
});



module.exports = router;









