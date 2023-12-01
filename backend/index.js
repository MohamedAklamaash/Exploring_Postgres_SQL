const express = require("express");
const app = express();
const http = require("node:http");
const server = http.createServer(app);
const cors = require("cors");
require("dotenv").config();
app.use(cors({
    origin:"http://localhost:3000",
    allowedHeaders:true,
    credentials:true
}));
app.use(express.urlencoded({extended:true}))
const routes_v1 = require("./routes/yelp_v1_routes");
app.use("/api/v1",routes_v1);
server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})