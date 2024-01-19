const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14?retryWrites=true&w=majority');
}

main().catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  studentID: String,
  dateOfBirth: Date,
  yearOfStudy: String,
  grades: {
    english: { type: Number, default: 0 },
    math: { type: Number, default: 0 },
    history: { type: Number, default: 0 },
    geography: { type: Number, default: 0 },
  },
});

const studentModel = mongoose.model('students', studentSchema);

app.delete('/api/student/:id', async (req, res) => {
  console.log('Delete: ' + req.params.id);
  let student = await studentModel.findByIdAndDelete(req.params.id);
  res.send(student);
});

app.put('/api/student/:id', async (req, res) => {
  console.log('Update: ' + req.params.id);
  let student = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

app.post('/api/student', (req, res) => {
  console.log(req.body);
  studentModel
    .create({
      name: req.body.name,
      studentID: req.body.studentID,
      dateOfBirth: req.body.dateOfBirth,
      yearOfStudy: req.body.yearOfStudy,
      grades: req.body.grades,
    })
    .then(() => {
      res.send('Student Created');
    })
    .catch(() => {
      res.send('Student NOT Created');
    });
});

app.get('/api/student', async (req, res) => {
  let students = await studentModel.find({});
  res.json(students);
});

app.get('/api/student/:id', async (req, res) => {
  console.log(req.params.id);
  let student = await studentModel.findById(req.params.id);
  res.send(student);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
