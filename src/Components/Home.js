import { useContext } from "react";

import { useRef } from "react";

import { Container, Form, Button } from "react-bootstrap";

import AuthContext from "../store/AuthContext";

let email;
function Home() {
  let context = useContext(AuthContext);

  email = context.email;

  const form = useRef();
  const from = useRef();
  const to = useRef();
  const subject = useRef();
  const message = useRef();

  function submitHandler(e) {
    e.preventDefault();

    let fun = async () => {
      try {
        let response = await fetch(
          `https://authenticate-app-70c08-default-rtdb.firebaseio.com/Data.json`,
          {
            method: "POST",
            body: JSON.stringify({
              from: from.current.value,
              to: to.current.value,
              subject: subject.current.value,
              message: message.current.value,
              isVisible: { value: true },
            }),
          }
        );
        if (response.status === 200) {
          alert("email sent successfully");
          context.getData();
        } else {
          throw new Error("Error occur in store data in database");
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fun();
  }
  return (
    <Container>
      <br></br>
      <br></br>

      <Form ref={form} onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="sender_email"
            disabled
            ref={from}
          />
          <Form.Label>To</Form.Label>
          <Form.Control
            type="email"
            name="receiver_email"
            placeholder="name@example.com"
            ref={to}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" ref={subject} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Compose Email</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            ref={message}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" varient="primary">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
