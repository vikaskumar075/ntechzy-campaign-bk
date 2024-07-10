import User from "../model/authmodel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).send({ message: 'Invalid username or password' ,success:false });
    }


    if (password!=user.password) {
      return res.status(200).send({ message: 'Invalid Password',success:false})
    }
    
    return res.status(200).send({ message: 'Login Successfully',location: `${user.location}`, success:true})
  } catch (err) {

    return res.status(500).send({ message: 'Internal Server Error' ,success:false});
  }
}