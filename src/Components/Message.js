import { Card, Container, Button } from "react-bootstrap";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";

function Message() {
  let context = useContext(AuthContext);
  let array = context.arr;
  console.log(context.arr);
  return (
    <Container className="me-auto">
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Text>
            <h4>{array[0]}</h4>
          </Card.Text>
          <Card.Text>
            <h4>Subject: {array[1]}</h4>
          </Card.Text>
          <Card.Text>
            <h6>Message: {array[2]}</h6>
          </Card.Text>

          <Button variant="primary">Reply</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Message;
