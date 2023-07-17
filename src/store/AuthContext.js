import React from "react";
let AuthContext = React.createContext({
  Token: "",
  isLoggedIn: "false",
  login: () => {},
  logOut: () => {},
  ID: "",
  email: "",
  array: [],
  getData: () => {},
});
export default AuthContext;
