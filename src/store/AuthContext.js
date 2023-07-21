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
  isVisible: () => {},
  getData: () => {},
  getDataOfSingleEmail: () => {},
  daleteSingleEmail: () => {},
});
export default AuthContext;
