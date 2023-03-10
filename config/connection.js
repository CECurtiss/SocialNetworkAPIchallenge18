const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
