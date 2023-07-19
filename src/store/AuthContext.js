import React from "react";
let AuthContext = React.createContext({
  Token: "",
  isLoggedIn: "false",
  login: () => {},
  logOut: () => {},
  ID: "",
  email: "",
  array: [],
  arr: [],
  getData: () => {},
  getDataOfSingleEmail: () => {},
});
export default AuthContext;
