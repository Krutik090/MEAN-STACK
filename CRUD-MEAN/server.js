const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const { error } = require('console');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/demoDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected...`))
    .catch((error) => console.log('Error: ', error));

const studentSchema = new mongoose.Schema({ name: String, id: String, course: String })
const Student = mongoose.model('Student', studentSchema);



app.post('/students', (req, res) => {
    const newStud = new Student(req.body);
    newStud.save().then(student => res.json(student))
        .catch((error) => res.status(400).json(error));
})

app.get('/students/:name', (req, res) => {
    const studentName = req.params.name;
    Student.findOne({ name: studentName })
        .then(student => {
            if (student) {
                res.json(student);
            } else {
                res.status(404).json({ message: "Student Not Found" });
            }
        }).catch((error) => res.status(400).json(error));
})

app.get('/students', (req, res) => {
    Student.find().then(students => res.json(students)).catch((error) => res.status(400).json(error));
})

app.put('/students/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id).then(() => res.json({ success: true }))
        .catch((error) => res.status(400).json(error));
});

app.delete('/students/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id).then(() => res.json({ success: true })).catch((error) => res.status(400).json(error));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(4200, () => console.log('server running on http://localhost:4200'));