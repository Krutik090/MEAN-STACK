const http = require('http');
const port = 1200;

const server = http.createServer((req,res)=>{
    switch(req.url){
        case "/" :
            res.end("Home page");
            break;
        case "/faculty" :
            res.end("Faculty page");
            break;
        case "/student" :
             res.end("Student page");   
             break;         
        default:
            res.end("404 page not Found");
    }

});
server.listen(1200,()=>console.log("Server Started"));