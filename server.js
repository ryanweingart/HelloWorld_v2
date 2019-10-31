const express = require("express"); // run npm i express to install 
const mongoose = require("mongoose"); // run npm i mongoose to install
const passport = require("./passport");
const routes = require("./routes"); // index route?
const authenticationRoute = require("./routes/authentication");
const apiRoutes = require("./routes/apiRoutes");
// const path = require("path");


const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var db = process.env.MONGODB_URI || "mongodb://localhost/HelloWorldDB";

// Connect to the Mongo DB
mongoose.connect(db, function(err) {
  if (err) {
    console.log(err);
  }

  else {
    console.log("mongoose connection is successful");
  }
});

// Routes
// app.use("/", routes);
app.use("/api", apiRoutes);
app.use("/authentication", authenticationRoute);

// to use passport
app.use(passport.initialize());
// app.use(passport.session());


app.listen(PORT, () => {
  console.log(`==> API server now on port ${PORT}!`);
});
