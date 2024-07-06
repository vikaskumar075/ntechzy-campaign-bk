import express from "express"
import bodyParser from "body-parser";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./database/connectDb.js";
import linkRoutes from "./routes/link_route.js";
import remainRoutes from "./routes/remainlink_route.js"
import login from "./routes/authroute.js";
dotenv.config();
const app = express(); 
const PORT = process.env.PORT;  
connectDB();
// Middleware 
app.use(express.json());
// app.use(bodyParser.json());   
app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use("/api",linkRoutes)
app.use("/api",remainRoutes)
app.use('/api/auth',login)
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(cors());
// app.options('*',cors());
// var allowCrossDomain = function(req,res,next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();  
// }
// app.use(allowCrossDomain);

// app.use(cors());
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
