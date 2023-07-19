import { useContext } from "react";
import AuthContext from "../store/AuthContext";
import { Table } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>email</th>
            <th>subject</th>
            <th>message</th>
          </tr>
        </thead>
        <tbody>
          {array.map((e, i) => {
            return (
              <Nav.Link
                as={Link}
                to={"./Inbox/Message"}
                style={{ display: "table-row" }}
                onClick={() => {
                  context.getDataOfSingleEmail(e.from, e.subject, e.message);
                }}
              >
                <td>{i}</td>
                <td>{e.from}</td>
                <td>{e.subject}</td>
                <td>{e.message}</td>
              </Nav.Link>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Inbox;
