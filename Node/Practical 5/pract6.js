const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const hostname = '127.0.0.1';
const port = "1270";

const server = http.createServer((req,res)=>{

    const parseurl = url.parse(req.url) // returns an object with various properties 

    const path = parseurl.pathname === '/' ? '/index.html' : parseurl.pathname;
    // If the path name is '/' (root URL) then it will be assign in value index.html
    // If not then we append .html with path(about.html)
    

    fs.readFile(__dirname + path ,(err,data)=>{
        // Read the data from the path which we specify
        //__dirname it is global varibale that gives name of the directory of the current module
        if(err){
            res.writeHead(404,{'Contect-type':'text/html'});
            res.end("<b>404 Page Not Found</b>");
        }
        else{
            res.writeHead(200,{'Contect-type':'text/html'});
            res.end(data);
           /*
            switch(myurl.pathname){
                case "/index.html":
                    res.writeHead(200,{'Contect-type':'text/html'});
                    res.end(data);
                case "/contactus.html":
                    res.writeHead(200,{'Contect-type':'text/html'});
                    res.end(data);
                case "/aboutus.html":
                    res.writeHead(200,{'Contect-type':'text/html'});
                    res.end(data);
                default:
                    res.writeHead(404,{'Contect-type' :'text/plain'});
                    res.end("404 Page Not Found");

            }; */
        }
    });
});

server.listen(port,hostname,()=>{
    console.log(`Server Running at HTTP://${hostname}:${port}/`);
});