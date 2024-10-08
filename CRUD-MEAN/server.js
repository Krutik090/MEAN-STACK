const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const dataFilePath = path.join(__dirname, 'data', 'data.json');

function readData() {
    return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
}

function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 4));
}

//Insert Data
app.post('/users', (req, res) => {

    const users = readData();
    const newUser = {

        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: req.body.name,
        age: parseInt(req.body.age, 10)

    };

    users.push(newUser);
    writeData(users);
    res.json(newUser);
});

//View Data
app.get('/users',(req,res) => {

    const users = readData();
    res.json(users);

});

//Delete Data
app.delete('/users/:id',(req,res)=>{

    const userId = parseInt(req.params.id,10);
    let users = readData();
    users = users.filter(u => u.id !== userId)
    writeData(users);
    res.json({message :'User Deleted'}); 

});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});