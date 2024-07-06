import express from "express"
import {save_medium} from "../controllers/link_controller.js";
const Router = express.Router();
Router.post("/save-medium",save_medium);
Router.get("/start",(req, res) =>{
    res.send('working')
    console.log("workoing");
});


 
export default Router; 