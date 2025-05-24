import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Badge, Form } from 'react-bootstrap';
import DineshPhoto from './assets/dinesh.jpg';
import './App.css';

const DineshPortfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}>
      {/* Navbar */}
      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">Dinesh K</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="outline-secondary" size="sm" onClick={toggleDarkMode} className="ms-3">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="text-center py-5 border-bottom">
        <Container>
          <img
            src={DineshPhoto}
            alt="Dinesh K"
            className="rounded-circle shadow mb-3"
            style={{ width: '160px', height: '160px', objectFit: 'cover' }}
          />
          <h1 className="display-4 fw-semibold">Hi, I'm Dinesh 👋</h1>
          <p className="lead">Full Stack Developer (MERN) & Aspiring DevOps Engineer</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button variant="dark" href="https://linkedin.com/in/connectdinesh" target="_blank">LinkedIn</Button>
            <Button variant="outline-dark" href="https://github.com/Dineshk-connect" target="_blank">GitHub</Button>
            <Button variant="primary" href="mailto:dinesh.k.connect@gmail.com">Hire Me</Button>
            <Button variant="success" href="/resume.pdf" download>Download Resume</Button>
          </div>
        </Container>
      </div>

      {/* About */}
      <Container id="about" className="py-5">
        <h2 className="fw-bold mb-3">About Me</h2>
        <p>
          I'm currently pursuing my MCA at The Oxford College of Engineering (2024–2026). Passionate about building modern web apps using the MERN stack. I’ve completed a Frontend Development internship at VTECH Integrated Solutions and am currently exploring DevOps technologies.
        </p>
      </Container>

      {/* Skills */}
      <Container id="skills" className="py-5">
        <h2 className="fw-bold mb-3">Skills</h2>
        <div className="d-flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "MySQL", "Java", "Python", "C", "Git", "DevOps (Learning)"]
            .map(skill => <Badge bg="secondary" className="px-3 py-2" key={skill}>{skill}</Badge>)}
        </div>
      </Container>

      {/* Projects */}
      <Container id="projects" className="py-5">
        <h2 className="fw-bold mb-3">Projects</h2>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>Job Board Web App</Card.Title>
                <Card.Text>
                  Built with the MERN stack, it features employer and candidate dashboards, job applications, and resume viewing.
                </Card.Text>
                <Button variant="outline-primary" href="https://github.com/Dineshk-connect/JobBoard-Application.git" target="_blank">View on GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Education */}
      <Container id="education" className="py-5">
        <h2 className="fw-bold mb-3">Education</h2>
        <ul>
          <li><strong>MCA</strong> – The Oxford College of Engineering (2024–2026)</li>
          <li><strong>BCA</strong> – SVR College of Commerce & Management (Bangalore University), CGPA: 9.0</li>
        </ul>
      </Container>

      {/* Contact */}
      <Container id="contact" className="py-5">
        <h2 className="fw-bold mb-3">Contact</h2>
        <p>Email: <a href="mailto:dinesh.k.connect@gmail.com">dinesh.k.connect@gmail.com</a></p>
        <p>Phone: 9742466980</p>
        <p>Languages: English, Kannada, Telugu, Basic Hindi</p>
        <p>Location: Bangalore, India</p>
      </Container>

      {/* Footer */}
      <footer className={`text-center py-3 ${darkMode ? 'bg-secondary text-light' : 'bg-dark text-white'}`}>
        <Container>
          <small>&copy; {new Date().getFullYear()} Dinesh K | Built with React & Bootstrap</small>
        </Container>
      </footer>
    </div>
  );
};

export default DineshPortfolio;