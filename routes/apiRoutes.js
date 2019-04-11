require("dotenv").config();
const axios = require("axios");
const router = require("express").Router();
const API_KEY =`${process.env.REACT_APP_API_KEY}`
const path = require("path");


  router.get("/books", (req, res) => {
    
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=intitle:", { params: req.query } )
      .then((response) => {
        res.json(response.data.items)
    })
      .catch(err => res.status(422).json(err));
  });
  


module.exports = router;
