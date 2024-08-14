const http = require("http");
const port = 999;
const url = require('url');
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    const myurl = url.parse(req.url);
    const queryparam = querystring.parse(myurl);
    switch(myurl){
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            const name = queryparam.name1;
            res.end(`Hello ${name}`);
            break;
        case "/about":
            const no = queryparam.cno;
            res.end(`Contact No ${no}`);
            break;
        default:
            res.end("404 Page Not Found");
    };
});
