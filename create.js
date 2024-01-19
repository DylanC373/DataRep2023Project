import { useState } from 'react';
import axios from 'axios';

function CreateStudent() {
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: name,
      studentID: studentID,
      dateOfBirth: dateOfBirth,
      yearOfStudy: yearOfStudy,
    };

    axios.post('http://localhost:4000/api/student', student).catch();
  };

  return (
    <div>
      <h2>Hello from create Student Component!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Student ID: </label>
          <input
            type="text"
            className="form-control"
            value={studentID}
            onChange={(e) => {
              setStudentID(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth: </label>
          <input
            type="date"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Year of Study: </label>
          <input
            type="text"
            className="form-control"
            value={yearOfStudy}
            onChange={(e) => {
              setYearOfStudy(e.target.value);
            }}
          />
        </div>
        <div>
          <input type="submit" value="Add Student"></input>
        </div>
      </form>
    </div>
  );
}

export default CreateStudent;
