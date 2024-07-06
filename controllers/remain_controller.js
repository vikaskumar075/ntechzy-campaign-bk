import NameModel from "../model/remainlink_model.js";

const save_remain = async (req, res) => {
  console.log("api")
  try {
    const { username,MobileNumber,whoIAm } = req.body;
  
    if (!username || !MobileNumber) {
        return res.status(200).json({
          message: "Please Fill The field",
          success: false,
        });
      }
    // Check if username already exists in the same category
    console.log(username, MobileNumber, whoIAm)
    const existingUser = await NameModel.findOne({ username,whoIAm});
    // If username exists in the same category, return error message
   
    if (existingUser) {
      return res.status(200).json({
        message: "This name is taken in this category",
        success: false,
      });
    }

    // Save new name entry if username does not exist in the same category
    const newname = new NameModel({ username, whoIAm, MobileNumber: Number(MobileNumber) });
    await newname.save();

    return res.status(200).json({
      message: "Link Generated Successfully",
      success: true,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export default save_remain;
