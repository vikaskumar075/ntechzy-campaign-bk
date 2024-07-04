import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create a schema for the Link
const linkSchema = new Schema({
  medium: {
    type: String,
    required: true,
  },
  urlmedium: {
    type: String,
  },
  youtube: {
    type: Number,
    default: 0,
  },
  instagram: {
    type: Number,
    default: 0,
  },
  facebook: {
    type: Number,
    default: 0,
  },
  googleads: { type: Number, default: 0 },
});

// Create a model for the Link
const Link = mongoose.model("Link", linkSchema);

export default Link;
