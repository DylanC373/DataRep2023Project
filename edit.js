import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditStudent() {
  let { id } = useParams();

  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/student/' + id)
      .then((response) => {
        setName(response.data.name);
        setStudentID(response.data.studentID);
        setDateOfBirth(response.data.dateOfBirth);
        setYearOfStudy(response.data.yearOfStudy);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: name,
      studentID: studentID,
      dateOfBirth: dateOfBirth,
      yearOfStudy: yearOfStudy,
    };

    axios
      .put('http://localhost:4000/api/student/' + id, student)
      .then((res) => {
        navigate('/read');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Hello from Edit Student component!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Edit Student Name: </label>
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
          <label>Edit Student ID: </label>
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
          <label>Edit Student Date of Birth: </label>
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
          <label>Edit Student Year of Study: </label>
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
          <input type="submit" value="Edit Student"></input>
        </div>
      </form>
    </div>
  );
}
