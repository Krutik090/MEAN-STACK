const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyparser = require('body-parser');
	
const app = express();
const port = 3000;
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

const datafilepath = path.join(__dirname, 'data', 'data.json');
// console.log(__dirname);
function readdatafromfile() {
    const data = fs.readFileSync(datafilepath, 'utf-8');
    return JSON.parse(data);
}

function writedatafromfile(data) {
    fs.writeFileSync(datafilepath, JSON.stringify(data, null, 2));
}

app.get('/users', (req, res) => {
    const users = readdatafromfile();
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const users = readdatafromfile();
    const userid = parseInt(req.params.id,10);
    const user = users.find(user => user.id === userid);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const users = readdatafromfile();
    const newuser =
    {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: req.body.name,
        gender: req.body.gender,
        city: req.body.city,
        email: req.body.email,
        mobno: req.body.mobno
    };
    users.push(newuser);
    writedatafromfile(users);
    res.status(201).json(newuser);
});

app.put('/users/:id', (req, res) => {
    const users = readdatafromfile();
    const userid = parseInt(req.params.id,10);
    const userindex = users.findIndex(user => user.id === userid);

    if (userindex >= 0) {
        users[userindex].name = req.body.name || users[userindex].name;
        users[userindex].gender = req.body.gender || users[userindex].gender;
        users[userindex].city = req.body.city || users[userindex].city;
        users[userindex].email = req.body.email || users[userindex].email;
        users[userindex].mobno = req.body.mobno || users[userindex].mobno;
        writedatafromfile(users);
        res.json(users[userindex]);
    }
    else {
        res.status(404).json({ error: 'User not found' });
    }
});
app.delete('/users/:id', (req, res) => {
    const users = readdatafromfile();
    const userid = parseInt(req.params.id,10);
    const newuser = users.filter(user => user.id !== userid);
    if (newuser.length !== users.length) {

        writedatafromfile(newuser);
        res.json({ message: 'User Deleted' });
    }
    else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
