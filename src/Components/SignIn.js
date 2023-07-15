import { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
function LogIn(props) {
  return (
    <Card style={{ width: "20rem", marginTop: "5rem", marginRight: "10rem" }}>
      <Card.Body>
        <Form onSubmit={props.submitHandler}>
          <Container className="m-3">
            <h4>SignIn</h4>
          </Container>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={props.emailRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={props.passwordRef}
            />
          </Form.Group>

          <Button variant="primary" size="md" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default LogIn;
