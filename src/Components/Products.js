import { useContext } from "react";
import AuthContext from "../store/AuthContext";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";
let ID;
function Products() {
  let context = useContext(AuthContext);
  let array = context.array;
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
              <tr>
                <td>{i}</td>
                <td>{e.email}</td>
                <td>{e.subject}</td>
                <td>{e.message}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Products;
