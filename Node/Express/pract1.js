const express = require('express');  //Import express freamwork for creating a web application and handling HTTP request 
const bodyparser = require('body-parser'); // Middleware for parsing incoming request body data(form-data)
const path = require('path');// It is used for handling & transforming the file path
const app = express(); // Create the instance of express application, Which is used for handling routes and middleware
const port = 1233;

//app.use method register the middlware with express application
app.use(bodyparser.urlencoded({extended : true}));
// bodyparser.urlencoded({extended : true}) :- Configure middleware to parse form data (urlencoded data)
// Extended true use for object and array to be encoded

// Serve index.html

// app.get('/') :- Define the route(Default Route) for Get request
// res.sendFile(path.join(__dirname,'index.html', :- Send index.html to the client 
// next(err)=> If any error occurs while serving the file it will pass the error to the next middleware 
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'),(err)=>{
        if(err){
            console.error("Error While serving the HTML file", err);
            next(err);
        }
    });
});

//Handling form submission
//app.post('/submit-form'):- Define Route for post method and request to submit-form
//req.body.txtName :- Contains the form data submitted by the user 
// Note: If we are not importing body-parser it will not accessible
// res.send() :- Response back to the client in HTML form 
app.post('/submit-form',(req,res)=>{
    const name= req.body.txtName;
    res.send(`<h2>Form Submitted Name: ${name}</h2>`);
});

// We are using app instance to listen to specify port number
app.listen(port,()=> {
    console.log(`Server running on port ${port}`);
});

