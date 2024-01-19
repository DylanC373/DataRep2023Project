import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function StudentItem(props) {
  return (
    <div>
      <Card>
        <Card.Header>{props.myStudent.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>Student ID: {props.myStudent.studentID}</p>
            <p>Date of Birth: {props.myStudent.dateOfBirth}</p>
            <p>Year of Study: {props.myStudent.yearOfStudy}</p>
          </blockquote>
        </Card.Body>
        <Link to={'/edit/' + props.myStudent._id} className="btn btn-primary">
          Edit
        </Link>
        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault();
            axios
              .delete('http://localhost:4000/api/student/' + props.myStudent._id)
              .then((res) => {
                let reload = props.Reload();
              })
              .catch();
          }}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
}

export default StudentItem;
