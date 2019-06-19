mongoose = require("mongoose");
event = require("./github/event");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
};

const models = { event };

module.exports = {
  connectDb,
  models
};
