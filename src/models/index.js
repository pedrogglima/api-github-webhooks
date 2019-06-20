mongoose = require("mongoose");
Event = require("./github/event");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
};

const models = { Event };

exports.connectDb = connectDb;
exports.models = models;
