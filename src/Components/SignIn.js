import { useState } from "react";
import { Form, Button, Card, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function LogIn(props) {
  return (
    <Card
      style={{
        width: "20rem",
        marginTop: "5rem",
        marginRight: "10rem",
      }}
    >
      <Card.Body>
        <Form onSubmit={props.submitHandler}>
          <Container className="m-3">
            <h4>LogIn</h4>
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

          <Form.Control as={Button} variant="primary" size="md" type="submit">
            Submit
          </Form.Control>
        </Form>
        <Container className="mt-2">
          <Link>Forgot Password</Link>
        </Container>
      </Card.Body>
    </Card>
  );
}
export default LogIn;
