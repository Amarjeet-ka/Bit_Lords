import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "../navbar/Navbar";
import bk from '../assets/bk.jpg';

export default function Contact() {
  return (
    <div>
      <Navigation />
      <Container
        style={{
          padding: "5%",
          marginTop:'10%',
          background: `url(${bk})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        fluid
      >
        <Row>
          <Col style={{ textAlign: "center", marginTop: "40px" }}>
            <h1 style={{ color: "orange", marginTop: "10%", fontSize: "36px" }}>
              GET IN TOUCH
            </h1>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  color: "orange",
                  fontSize: "24px",
                }}
              >
                Email:
              </p>
              <p style={{ color: "orange", fontSize: "20px" }}>
                example@gmail.com
              </p>
              <p style={{ color: "orange", fontSize: "20px" }}>
                example2@gmail.com
              </p>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <div style={{ marginTop: "20px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  color: "orange",
                  fontSize: "24px",
                }}
              >
                Phone:
              </p>
              <p style={{ color: "orange", fontSize: "20px" }}>0123456789</p>
              <p style={{ color: "orange", fontSize: "20px" }}>3214698789</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
