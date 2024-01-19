import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CreateStudent from './components/createStudent';
import ReadStudents from './components/readStudents';
import EditStudent from './components/editStudent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Student Management System</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create Student</Nav.Link>
              <Nav.Link href="/read">Read Students</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Container>Home</Container>} />
          <Route path="/read" element={<ReadStudents />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

