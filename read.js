import { useEffect, useState } from 'react';
import axios from 'axios';
import Students from './students';

function ReadStudents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/student')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Reload = (e) => {
    axios
      .get('http://localhost:4000/api/student')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Hello from Read Students Component!</h2>
      <Students myStudents={data} ReloadData={Reload}></Students>
    </div>
  );
}

export default ReadStudents;