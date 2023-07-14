import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import AuthPage from "./Components/AuthPage";

import { useContext } from "react";
import AuthContext from "./store/AuthContext";
import Header from "./Components/Header";
import { Redirect } from "react-router-dom";

function App() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;
  return (
    <div className=" App">
      <Header />
      <Switch>
        {!login && (
          <Route path="/">
            <AuthPage />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
