import { Link } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import { useContext } from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
function Header() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;

  return (
    <div className="row">
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/Products">Products</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/AboutUs">AboutUs</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
