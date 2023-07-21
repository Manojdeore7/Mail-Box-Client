import { useContext, useState } from "react";
import AuthContext from "../store/AuthContext";
import { Table } from "react-bootstrap";
import { Container, Nav, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
let ID;
function Inbox() {
  let context = useContext(AuthContext);

  let email = context.email;
  let array = context.array;

  let [value, setValue] = useState(true);

  array = array.filter((e) => {
    return e.to === email;
  });
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>email</th>
            <th>subject</th>
            <th>message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {array.map((e, i) => {
            value = e.isVisible.value;
            return (
              <tr>
                <td style={{ display: "flex", gap: "20px" }}>
                  <h4>{i + 1}</h4>
                  {value && <h4>#</h4>}
                </td>
                <td>
                  <Nav.Link
                    as={Link}
                    to={`/Inbox/Message${e.key}`}
                    onClick={() => {
                      context.getDataOfSingleEmail(
                        e.from,
                        e.subject,
                        e.message
                      );
                      e.isVisible.value = false;
                      setValue(false);
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
