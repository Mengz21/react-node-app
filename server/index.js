// server/index.js
const path = require('path');
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

mongoose.connect("mongodb+srv://hulo9:MONGODB_KEY@cluster0.ihunb0h.mongodb.net/blogDB", {useNewUrlParser : true});


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
