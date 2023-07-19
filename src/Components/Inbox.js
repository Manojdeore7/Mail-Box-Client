import { useContext } from "react";
import AuthContext from "../store/AuthContext";
import { Table } from "react-bootstrap";
import { Container, Nav, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
let ID;
function Inbox() {
  let context = useContext(AuthContext);
  let email = context.email;
  let array = context.array;
  array = array.filter((e) => {
    return e.to === email;
  });

  console.log(array);
  return (
    <Container>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>email</th>
            <th>subject</th>
            <th>message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {array.map((e, i) => {
            return (
              <tr>
                <td>{i}</td>
                <td>
                  <Nav.Link
                    as={Link}
                    to={"./Inbox/Message"}
                    onClick={() => {
                      context.getDataOfSingleEmail(
                        e.from,
                        e.subject,
                        e.message
                      );
                    }}
                  >
                    {e.from}
                  </Nav.Link>
                </td>
                <td>{e.subject}</td>
                <td>{e.message}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      context.daleteSingleEmail(e.key);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Inbox;
