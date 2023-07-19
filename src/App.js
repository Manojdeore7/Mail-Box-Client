import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Inbox from "./Components/Inbox";
import Sent from "./Components/Sent";
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
          <Route path="/" exact>
            <AuthPage />
          </Route>
        )}
        {!login && (
          <Route path="/*">
            <Redirect to="./"></Redirect>
          </Route>
        )}
        {login && (
          <Route path="/" exact>
            <Home />
          </Route>
        )}
        {login && (
          <Route path="/Inbox">
            <Inbox />
          </Route>
        )}
        {login && (
          <Route path="/Sent">
            <Sent />
          </Route>
        )}
        {login && (
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
