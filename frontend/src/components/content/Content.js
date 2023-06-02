import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Content.css";
import Col from "react-bootstrap/Col";
import edu from "../assets/edu.mp4";

export default function Content() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="grid-btn">
            <video width={800} height={450} ref={videoRef} controls>
              <source src={edu} />
            </video>
            <button className="btn-play" onClick={handlePlay}>
              Play
            </button>
            <button className="btn-pause" onClick={handlePause}>
              Pause
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="content-heading">Content</h2>
          <div className="content-text">
            <p>
              Cyber security is the practice of defending computers, servers,
              mobile devices, electronic systems, networks, and data from
              malicious attacks. It's also known as information technology
              security or electronic information security. The term applies in a
              variety of contexts, from business to mobile computing
            </p>
            <p>
              QUIZ LINK:<a href="https://forms.gle/rf6kWTJX2PbBU3xj6">TEST 1</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
