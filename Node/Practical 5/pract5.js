const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8010;

const server = http.createServer((req,res)=>{
    //defines the file path 
    const filepath = path.join(__dirname,'index.html'); // __dirname tells you absolute path of directory containing current file
    //Read the file
    fs.readFile(filepath,(err,data)=>
    {
        if(err){
            res.writeHead(500,{'Contect-type' :'text/plain'});
            res.end("500 Internal Server Error");
        }
        else{
            res.writeHead(200,{'Contect-type' :'text/html'});
            res.end(data);
            
        }
    });
});

server.listen(port,hostname,()=>{
    console.log(`Server Running at HTTP://${hostname}:${port}/`);
});