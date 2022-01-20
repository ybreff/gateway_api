const oEnvironment = require('../constants/environment.js');

const DB_USER = oEnvironment.DB_USER;
const DB_PASSWORD = oEnvironment.DB_PASSWORD;
const DB_NAME = oEnvironment.DB_NAME;
const DB_HOST = oEnvironment.DB_HOST;

module.exports = {
    url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
};