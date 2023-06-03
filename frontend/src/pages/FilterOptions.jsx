import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./FilterOptions.css"; // Import custom CSS file for styling

const FilterOptions = () => {
  const [branches, setBranches] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");

  // Fetch branches data from API
  useEffect(() => {
    axios.get("https://api.example.com/branches")
      .then(response => {
        setBranches(response.data);
      })
      .catch(error => {
        console.error("Error fetching branches:", error);
      });
  }, []);

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
                  <option key={branch.id} value={branch.id}>
                    {branch.name}
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
                type="text"
                value={selectedInterest}
                onChange={event => setSelectedInterest(event.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" href="/homepage" type="submit">
          Apply Filters
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
