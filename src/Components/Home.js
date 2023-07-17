import { useContext, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { useRef } from "react";
import { EditorState } from "draft-js";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import AuthContext from "../store/AuthContext";

let ID;
let email;
function Home() {
  let [editorState, setEditorState] = useState(EditorState.createEmpty());
  let onEditorStateChange = () => {
    setEditorState({ editorState });
  };
  let context = useContext(AuthContext);
  let token = context.Token;
  ID = context.ID;
  email = context.email;
  const form = useRef();
  const emaill = useRef();
  const subject = useRef();
  const message = useRef();

  function submitHandler(e) {
    e.preventDefault();

    let fun = async () => {
      try {
        let res = await emailjs.sendForm(
          "service_60vcqc5",
          "template_5alcesr",
          form.current,
          "lIX3KdCxMHXRVMWPZ"
        );
        if (res.status === 200) {
          alert("email is sent");
          let response = await fetch(
            `https://mail-client-box-a2837-default-rtdb.firebaseio.com/${ID}.json`,
            {
              method: "POST",
              body: JSON.stringify({
                email: emaill.current.value,
                subject: subject.current.value,
                message: message.current.value,
              }),
            }
          );
          if (response.status == 200) {
            context.getData();
          } else {
            throw new Error("Error occur in store data in database");
          }
        } else {
          throw new Error("Error occur in sending mail");
        }
      } catch (error) {
        alert(error.message);
      }
    };
    fun();
  }
  return (
    <Container>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <Form ref={form} onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="email"
            value={email}
            name="sender_email"
            disabled
          />
          <Form.Label>To</Form.Label>
          <Form.Control
            type="email"
            name="receiver_email"
            placeholder="name@example.com"
            ref={emaill}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" name="subject" ref={subject} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Compose Email</Form.Label>
          <Form.Control as="textarea" name="message" rows={5} ref={message} />
        </Form.Group>
        <Button type="submit" varient="primary">
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
