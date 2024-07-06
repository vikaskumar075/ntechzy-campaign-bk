import mongoose from "mongoose"

const nameSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: Number,
    required: true,
  },
  whoIAm: {
    type: String,
    required: true,
    enum: ['influencer','faculty','student','agent','offline', 'college'],
  },
},);

const NameModel = mongoose.model('Name', nameSchema);

export default NameModel
