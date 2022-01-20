const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.gateway = require("./gateway.model.js")(mongoose);
db.device = require("./device.model.js")(mongoose);

module.exports = db;