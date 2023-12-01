const express = require("express");
const app = express();
const http = require("node:http");
const server = http.createServer(app);
require("dotenv").config();
server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})