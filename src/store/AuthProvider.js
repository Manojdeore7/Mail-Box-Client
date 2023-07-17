import AuthContext from "./AuthContext";
import { useState, useEffect } from "react";

let v = true;
function AuthProvider(props) {
  let [Token, setToken] = useState(null);
  let [array, setArray] = useState([]);
  let [ID, setID] = useState("");
  let [email, setEmail] = useState("");
  let userLoggedIn = !!Token;

  let loggedInHandeler = (token) => {
    v = true;
    setToken(token);
  };
  let loggedOutHandeler = () => {
    setToken(null);
  };
  let funGet = async () => {
    try {
      let res1 = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAgl36Y2mjDOhSlZShpe33Xk4fWzEhi6TE",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: Token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res1.status === 200) {
        throw new Error("error occur");
      }
      let data1 = await res1.json();

      setEmail(data1.users[0].email);
      setID(data1.users[0].localId);
    } catch (er) {
      console.log("eror occur");
    }
  };

  let fun = async () => {
    array = [];
    let response = await fetch(
      `https://mail-client-box-a2837-default-rtdb.firebaseio.com/${ID}.json`
    );
    if (!response.ok) {
      throw new Error("fetching data is failed!");
    }
    let data = await response.json();
    for (let key in data) {
      array.push(data[key]);
    }
    setArray(array);
  };

  useEffect(() => {
    funGet();
    fun();
  }, [Token]);

  let context = {
    Token: Token,
    isLoggedIn: userLoggedIn,
    login: loggedInHandeler,
    logOut: loggedOutHandeler,
    ID: ID,
    email: email,
    array: array,
    getData: fun,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
