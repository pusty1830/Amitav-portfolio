const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sin-up")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Collection = mongoose.model("Collection", newSchema);

module.exports = Collection;
