const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: [
    "http://localhost:8081",
    "http://localhost:3000"
  ]
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.post("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});
require("./routes/anime.routes.js")(app);
// set port, listen for requests
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});