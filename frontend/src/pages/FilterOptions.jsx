import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./FilterOptions.css"; // Import custom CSS file for styling

const FilterOptions = () => {
  const [branches, setBranches] = useState(["EC", "CSE", "Mech", "Agriculture"]);
  const [filteredData, setFilteredData] = useState([]);

  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");

  const interests = ["AI", "ML", "Cyber Security", "Data Science", "Web Development"];

  // Filter data based on selected options
  useEffect(() => {
    axios.get("https://api.example.com/data", {
      params: {
        branch: selectedBranch,
        age: selectedAge,
        interest: selectedInterest
      }
    })
      .then(response => {
        setFilteredData(response.data);
      })
      .catch(error => {
        console.error("Error fetching filtered data:", error);
      });
  }, [selectedBranch, selectedAge, selectedInterest]);

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Fetch filtered data based on selected options
    // ...
  };

  return (
    <div className="filter-options-container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="branch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                as="select"
                value={selectedBranch}
                onChange={event => setSelectedBranch(event.target.value)}
              >
                <option value="">All</option>
                {branches.map(branch => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                value={selectedAge}
                onChange={event => setSelectedAge(event.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="interest">
              <Form.Label>Interest</Form.Label>
              <Form.Control
                as="select"
                value={selectedInterest}
                onChange={event => setSelectedInterest(event.target.value)}
              >
                <option value="">All</option>
                {interests.map(interest => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>   
          </Col>
        </Row>
        <Button variant="primary" style={{marginLeft:'40%',marginTop:'10%'}} href="/homepage" type="submit">
          Proceed
        </Button>
      </Form>
      {/* Render filtered data */}
      {filteredData.map(item => (
        <div key={item.id} className="filtered-item">
          {/* Display filtered data */}
          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
