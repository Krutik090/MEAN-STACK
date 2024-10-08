const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const port = 3100;

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

const datafilepath = path.join(__dirname,'data','data.json');

function readdatafromfile(){
    const data = fs.readFileSync(datafilepath,'utf-8');

    return JSON.parse(data);
}

function writedatafromfile(data){
    fs.writeFileSync(datafilepath,JSON.stringify(data,null,2));
}

app.post('/users',(req,res)=>{
    const users = readdatafromfile();
    const newuser = {
        id:users.lengh ? users[users.lengh - 1].id +1 : 1,
        name : req.body.name,
        age: req.body.age,
        city:req.body.city,
        email : req.body.email,
        cno : req.body.cno
    };

    users.push(newuser);
    writedatafromfile(users);
    res.status(201).json(newuser);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

