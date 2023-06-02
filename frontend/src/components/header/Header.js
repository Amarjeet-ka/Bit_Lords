import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import w from "../assets/w.jpg";
import "./Header.css";
export default function Header() {
  const [imageSize, setImageSize] = useState({ width: "100%", height: "auto" });

  useEffect(() => {
    const handleResize = () => {
      setImageSize({ width: "100%", height: "100%" });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    backgroundImage: `url(${w})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Container fluid style={containerStyle}>
      <Row>
        <Col />
        <Col md={6} style={{ textAlign: "center" }}>
          <h1 className="head-font">We Rank the Best Courses on the Web</h1>
          <h3 className="head-small-font">
           Get all the tools you need to build and grow at same place in order to access quality education.We work with the community to address the barriers to a quality education for all students and giving opportunity to shine.
          </h3>
          <h2 className="head-cor">Top Courses</h2>
          <h2 className="head-cor">Top Courses</h2>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
