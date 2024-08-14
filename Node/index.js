const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}:${req.method}:${req.url} New Request Received \n`;
    const myurl = url.parse(req.url);
    console.log(myurl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myurl.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                const queryparam = querystring.parse(myurl.query);
                const name = queryparam.name1;
                res.end(`Hi ,${name}`);
                
                break;
            case "/Contactus":
                res.end("9328068456");
                break;
            case "/Portfolio":
                res.end("Portfolio");
                break;
            default:
                res.end("404 Page Not Found");
        }
            
    });

});

server.listen(6801,()=>console.log("Server Started"));