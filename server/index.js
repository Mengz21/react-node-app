// server/index.js
const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
//process.env.MONGODB_URI
mongoose.connect("process.env.MONGODB_URI", {useNewUrlParser : true});


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
