require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error  ${err}`);
  });
  // require("./routes/apiRoutes")(app);
// require("./routes/apiRoutes")(app);
app.use("/api", apiRoutes);
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
// require('dotenv').config();
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// const mongoose = require("mongoose");
// const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:/googlebooks"
// mongoose.connect(mongoURL, {useNewUrlParser: true})
//   .then(() => {
//     console.log("🗄 ==> Successfully connected to mongoDB.");
//   })
//   .catch((err) => {
//     console.log(`Error connecting to mongoDB: ${err}`);
//   });

// require("./routes/apiRoutes")(app);

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });