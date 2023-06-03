import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from '../components/navbar/Navbar';

export default function Resource() {
  const boxStyle = {
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    padding: "100px",
    borderRadius: "8px",
    background: "#ffffff",
    marginBottom: "50px", // Adds space between rows
    width: "100%", // Increase the size of the boxes
  };

  const linkStyle = {
    color: "inherit", // Inherit the color from the parent
    textDecoration: "none", // Remove underline
  };

  return (
    <div>
      <Navigation />
      <Container>
        <h1 style={{ marginTop: '10%', textAlign: 'center', color: 'gray', fontSize: '50px' }}>Resource Hub</h1>
        <Row style={{ marginTop: '8%' }}>
          <Col>
            <a href="https://backbencher.club/cbcs-notes/" style={linkStyle}>
              <div style={boxStyle}>
                <p>notes</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://backbencher.club/cbcs-notes/" style={linkStyle}>
              <div style={boxStyle}>
                <p>notes</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://backbencher.club/cbcs-notes/" style={linkStyle}>
              <div style={boxStyle}>
                <p>notes</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://backbencher.club/cbcs-notes/" style={linkStyle}>
              <div style={boxStyle}>
                <p>notes</p>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://www.vturesource.com/vtu-question-papers/" style={linkStyle}>
              <div style={boxStyle}>
                <p>Question Bank</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://www.indiabix.com/aptitude/questions-and-answers/" style={linkStyle}>
              <div style={boxStyle}>
                <p>Aptitude</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://www.mednotes.in/" style={linkStyle}>
              <div style={boxStyle}>
                <p>Medical Notes</p>
              </div>
            </a>
          </Col>
          <Col>
            <a href="https://backbencher.club/cbcs-notes/" style={linkStyle}>
              <div style={boxStyle}>
                <p>notes</p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
