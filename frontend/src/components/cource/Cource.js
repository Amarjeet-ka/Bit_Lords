import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Course.css";
import { FaBook, FaBookOpen, FaRegBook } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Cource() {
  return (
    <Container style={{ backgroundColor: "#f1f9ff", padding: "8%" }} fluid>
      <Row>
        <Col md={6} style={{ textAlign: "center", marginTop: "80px" }}>
          <h1 className="font-h1">Get started with Your Courses</h1>
          <h4 className="font-h4">
            Engineering is the application of mathematic and scientific
            principles to solve problems. Engineers research, invent and refine
            processes across a wide range of fields including medicine,
            transport, electronics, and much more. Most of what you see around
            you was designed by an engineer somewhere.
          </h4>
          <div>
            <Col md={2}></Col>{" "}
            <Col md={4}>
              {" "}
              <h4 className="font-h4-h4">Explore Courses</h4>
            </Col>
          </div>
        </Col>{" "}
        <Col md={1} />
        <Col md={3} style={{ textAlign: "center" }}>
          <div className="box-parent">
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Cyber Sequrity{" "}
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Full Stack{" "}
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Java Developer{" "}
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Blockchain{" "}
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Django{" "}
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
