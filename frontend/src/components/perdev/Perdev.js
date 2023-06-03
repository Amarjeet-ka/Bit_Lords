import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Perdev.css";
import Col from "react-bootstrap/Col";
import edu from "../assets/yg.mp4";
import a from '../assets/a.webp';
import b from '../assets/b.jpg';
import c from '../assets/c.webp';
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import bg from "../assets/bg.jpg";
import md from '../assets/md.mp4';

export default function Perdev() {
  const videoRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 120000); // 2 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    videoRef.current.addEventListener("ended", () => {
      setIsActive(true);
    });

    return () => {
      videoRef.current.removeEventListener("ended", () => {
        setIsActive(true);
      });
    };
  }, []);

  return (
    <Container style={{ backgroundImage: `url(${bg})` }} fluid >
      <Row>
        <Col style={{marginLeft:'5%'}}>
          <h1 style={{ fontSize: '65px', color: 'gray', fontFamily: 'sans-serif', marginTop: '8%', textAlign: 'center',fontWeight:'bold'  }}>Motivational Quotes</h1>

          <img src={a} alt="figure not found" style={{ marginLeft: '2%',marginTop:'.1%' }} />
          <img src={b} alt="figure not found" style={{ marginLeft: '23%', width: '350px' }} />
          <img src={d} alt="figure not found" style={{ marginLeft: '2%', width: '300px' }} />
          <img src={c} alt="figure not found" style={{ marginLeft: '15%', marginTop: '12%' }} />
          <img src={e} alt="figure not found" style={{ marginLeft: '2%', marginTop: '5%', width: '450px' }} />

          <hr />

          <h1 style={{ fontSize: '65px', color: 'white', fontFamily: 'sans-serif',fontWeight:'bold'  ,marginTop: '2%', textAlign: 'center' }}>Videos for Yoga</h1>

          <div className="grid-btn">
            <video width={1135} height={600} ref={videoRef} controls>
              <source src={edu} />
            </video>
        
          </div>
          <hr />

          <h1 style={{ fontSize: '65px', color: '#0959b0', fontWeight:'bold'  ,fontFamily: 'sans-serif', marginTop: '2%', textAlign: 'center' }}>Videos for Meditation</h1>

          <div className="grid-btn" style={{marginBottom:'4%'}}>
            <video width={1550} height={550} ref={videoRef}>
              <source src={md} />
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

        </Col>
      </Row>
    </Container>
  );
}
