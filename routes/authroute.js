import express from "express"
import login from "../controllers/authController.js";
const Router = express.Router();
Router.post("/login",login);
// Router.post("/check-duplicate",check_duplicate);

export default Router;