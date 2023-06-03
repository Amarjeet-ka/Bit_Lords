import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Stream.css";
import { FaBook, FaBookOpen, FaRegBook } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Stream() {
  return (
    <Container style={{ backgroundColor: "#f1f9ff", padding: "8%" }} fluid>
      <Row>
        <Col md={6} style={{ textAlign: "center", marginTop: "80px" }}>
          <h1 className="font-h1">Get Your dream cources with Collaboration form differtent prestigious Organisation</h1>
          <h4 className="font-h4">
            In today’s virtual world, the internet is one’s ultimate guidebook.
            Be it learning a skill or finding a job, you can find everything on
            the internet. To keep up with the competition, sharpening your
            skills is a never-ending process for working professionals as well
            as students. In this blog, we provide you with the best online
            courses for skill development
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
            <Link to={"/course"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Engineering{" "}
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Medical{" "}
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Agriculture
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen /> Buissness{" "}
              </button>
            </Link>
            <Link to={"/tutorials"}>
              {" "}
              <button>
                {" "}
                <FaBookOpen />
                Law{" "}
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
