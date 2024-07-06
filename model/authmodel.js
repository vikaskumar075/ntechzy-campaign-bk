import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create a schema for the Link
const linkSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

// Create a model for the Link
const User = mongoose.model("User", linkSchema);

export default User;
