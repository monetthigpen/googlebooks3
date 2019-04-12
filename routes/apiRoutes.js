require("dotenv").config();
const axios = require("axios");
const router = require("express").Router();
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
// const path = require("path");


router.get("/books", (req, res, query) => {
    
    axios
      .get(BASEURL + query )
      .then((response) => {
        res.json(response.data.items)
    })
      .catch(err => res.status(422).json(err));
});
  


module.exports = router;

// require("dotenv").config();
// const axios = require("axios");
// const db = require("../models");
// const path = require("path");

// // const router = require("express").Router();


// module.exports = function(app) {
//     app.get("/api/books", (req, res) => {
//         db.Book.find().then(
//             (booksData) => {
//                 res.json(booksData);
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: err});
//             }
//         );
//     });

//     app.post("/search", (req, res, query) => {
        
//         axios
//           .get(BASEURL + query)
//           .then((response) => {
//             res.json(response.data.items)
//           })
//           .catch(err => res.status(422).json(err));
//         });

//     app.post("/api/books", (req, res) => {
//         db.Book.create(req.body).then(
//             (response) => {
//                 res.json({successful: response});
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: err});
//             }
//         );
//     });

//     app.delete("/api/books/:id", (req, res) => {
//         db.Book.findByIdAndDelete(req.params.id).then(
//             (response) => {
//                 res.json({successful: response});
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: err});
//             }
//         );
//     });

//     // Send every other request to the React app
//     // Define any API routes before this runs
//     app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
// }
// require("dotenv").config();
// const axios = require("axios");
// const db = require("../models");
// const path = require("path");

// module.exports = function(app) {
//     app.get("/api/books", (req, res) => {
//         db.Book.find().then(
//             (booksData) => {
//                 res.json(booksData);
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: err});
//             }
//         );
//     });

//     app.post("/search", (req, res, query) => {
        
        
//         axios.get(
//             `https://www.googleapis.com/books/v1/volumes?q=`(query)
//         ).then(
//             (response) => {
//                 res.json(response.data.items)
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: error})
//             }
//         );
//     });

//     app.post("/api/books", (req, res) => {
//         db.Book.create(req.body).then(
//             (response) => {
//                 res.json({successful: response});
//             }
//         ).catch(
//             (err) => {
//                 res.json({error: err});
//             }
//         );
//     });

//     app.delete("/api/books/:id", (req, res) => {
//         db.Book.findByIdAndDelete(req.params.id).then(
//             (response) => {
//                 res.json({successful: response});
//             }
//         ).catch(
//             (err) => {
//                 rres.json({error: err});
//             }
//         );
//     });

//     // Send every other request to the React app
//     // Define any API routes before this runs
//     app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
// }

  