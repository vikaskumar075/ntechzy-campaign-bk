import express from "express"
import {save_medium} from "../controllers/link_controller.js";
const Router = express.Router();
Router.post("/save-medium",save_medium);


export default Router; 