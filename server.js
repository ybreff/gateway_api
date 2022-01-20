const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const oEnvironment = require('./app/constants/environment.js');
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get(oEnvironment.URL_API, (req, res) => {
  res.json({ message: "Path test succefull" });
});

//includin routes into api
require("./app/routes/gateway.routes")(app);
require("./app/routes/device.routes")(app);

// set port, listen for requests
const PORT = oEnvironment.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});