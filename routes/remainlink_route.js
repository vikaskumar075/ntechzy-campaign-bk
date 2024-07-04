import express from "express"
import save_remain from "../controllers/remain_controller.js";
const Router = express.Router();
Router.post("/save-remain",save_remain);
// Router.post("/check-duplicate",check_duplicate);

export default Router;