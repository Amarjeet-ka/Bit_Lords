import React from 'react';
import { Container } from 'react-bootstrap';
import { RiBook2Fill } from 'react-icons/ri';

export default function Subheader() {
  return (
    <Container fluid
      style={{
        backgroundColor: '#cde2d9',
        padding: '150px',
        marginTop: '20px',
        marginBottom: '20px',
        textAlign:'center'
      }}
    >
      <h2 style={{ fontSize: '24px' }}>
        <RiBook2Fill style={{ marginRight: '10px' }} /> Knowledge is power, we provide knowledge
      </h2>
      <p>
        Knowledge makes you shine, we bring together all aspects and features in a single environment.
      </p>
    </Container>
  );
}
