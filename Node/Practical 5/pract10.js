const http = require('http')

const products = [
    {id:1,name:'Product 1',price:500},
    {id:2,name:'Product 2',price:400},
    {id:3,name:'Product 3',price:500},
    {id:4,name:'Product 4',price:200},
    {id:5,name:'Product 5',price:100},

];

const server = http.createServer((req,res)=>{

    res.setHeader('Contect-type','application/json'); //Set response header to JSON
    if(req.url === '/car/product' && req.method === 'GET')
    {
        res.writeHead(200);
        res.end(JSON.stringify(products)); //Convert a javascript object to String
    }
    else{
        res.writeHead(404,{'Contant-type':'text/plain'});
        res.end("404 Not Found");
    }
});

server.listen(1234,()=>{
    console.log("Server running at 1234 port");
});