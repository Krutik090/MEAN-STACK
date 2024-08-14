const express = require("express");
const port = 3000;
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyparser.urlencoded({extended : true}));

const users = require('./empdata.json');

app.get('/api/users',(req,res)=>{

    return res.json(users);
});

app.get('/users',(req,res)=>{

    const html = 
    `
        <table border="2px">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
        
            ${users.map((user)=>
                `
                    <tr>
                        <td> ${user.id} </td>
                        <td> ${user.first_name}</td>
                        <td> ${user.last_name}</td>
                        <td> ${user.email}</td>
                        <td> ${user.gender}</td>
                    </tr>
                `
                ).join("")}
        </table>
    `;
    res.send(html);
});


app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id);
    
    return res.json(user);
});

app.get('/search',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'search.html'),(err)=>{
        if(err){
            console.error("Error While serving the HTML file", err);
            next(err);
        }
    });
});

app.post('/search',(req,res)=>{
    const id = req.body.txtid;
    const user = users.find((user)=>user.id === Number(id) || user.first_name === id || user.last_name === id || user.email === id);

    const html = `<table border="2px">
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
            `
            user.map((user)=>
                `
                    <tr>
                        <td> ${user.id} </td>
                        <td> ${user.first_name}</td>
                        <td> ${user.last_name}</td>
                        <td> ${user.email}</td>
                        <td> ${user.gender}</td>
                    </tr>
                `
                ).join("")
                `
        </table>
    `;
     res.send(html);
});

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`);
});