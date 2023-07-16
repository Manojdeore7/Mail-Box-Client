import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";

import { EditorState } from "draft-js";
import { Container, Form, Button } from "react-bootstrap";

function Home() {
  let [editorState, setEditorState] = useState(EditorState.createEmpty());
  let onEditorStateChange = () => {
    setEditorState({ editorState });
  };
  return (
    <Container>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>To</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Compose Email</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button varient="primary">Send</Button>
      </Form>
    </Container>
  );
}

export default Home;
