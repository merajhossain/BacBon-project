import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import dataServices from '../services/curdServices';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DataForms = (props) => {
  
  const [formData, setFormData] = useState(null);
  
  let navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formDataObj = Object.fromEntries(formData.entries());
    dataServices.dataCreate(formDataObj).then((res) => {
      console.log('res', res);
      navigate("/");
    });  
  };

  useEffect(() => {
    setFormData(props.data);
  }, [props])

  return (
    <>
      <Row>
        <Col>
          <div className="page-title">
            <h4>Data Form</h4>
          </div>
        </Col>
      </Row>
      <div className="w-100 content-body">
        <Form className="custom-form" onSubmit={onFormSubmit}>
          <Row className="g-5">
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" required value={formData?.firstName} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" required value={formData?.lastName}/>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="emailAddress" required value={formData?.emailAddress}/>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Button
                variant="primary"
                className="custom-primary-button"
                type="submit"
                value="Submit"
                size="lg"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default DataForms;
