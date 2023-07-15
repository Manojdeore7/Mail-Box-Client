import { Link } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
function Header() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;

  return (
    <div className="row">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="./">
            MyWebLink
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="./">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="./Products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="./AboutUs">
                AboutUs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {login && <Button variant="danger">LogOut</Button>}
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
