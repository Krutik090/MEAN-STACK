const fs = require("fs");
const http = require('http');
const port = 6800;
// const server = http.createServer((req,res)=>{
//     console.log("New Request Received")

//     res.end("Hello User Welcome to Node js");
// });

const server = http.createServer((req,res)=>
{
    res.end("Welcome to Node js application");
});

server.listen(port,()=>
console.log("Server Started on port "+ port));