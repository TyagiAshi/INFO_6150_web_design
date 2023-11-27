import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import { Card, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div>
      <div className="container py-6">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
