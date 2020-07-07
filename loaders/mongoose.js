const mongoose = require("mongoose");
const { databaseURL } = require("../utils/config");

mongoose.Promise = global.Promise;
mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set("useCreateIndex", true);

module.exports = mongoose.connection;
