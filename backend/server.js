const express = require("express");
const app = express();
const http = require("node:http");
const server = http.createServer(app);
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
const helmet = require("helmet");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));
const routes_v1 = require("./routes/yelp_v1_routes");
app.use("/api/v1",routes_v1);
app.get("/",(req,res)=>{
    return res.send("aklamaash")
});
process.on("exit",()=>{
    console.log("Server shutting down!");
})
server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});