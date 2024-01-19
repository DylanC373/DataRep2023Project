import StudentItem from './studentItem';

function Students(props) {
  return props.myStudents.map((student) => (
    <StudentItem
      myStudent={student}
      key={student._id}
      Reload={() => {
        props.ReloadData();
      }}
    ></StudentItem>
  ));
}

export default Students;
