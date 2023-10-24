import AuthContext from "./AuthContext";
import { useState, useEffect } from "react";

function AuthProvider(props) {
  let [Token, setToken] = useState(null);

  let [array, setArray] = useState([]);
  let [arr, setArr] = useState([]);
  let [ID, setID] = useState("");
  let [email, setEmail] = useState("");

  let userLoggedIn = !!Token;

  let loggedInHandeler = (token) => {
    setToken(token);
  };
  let emailHandler = (email, subject, message) => {
    setArr([email, subject, message]);
  };
  let loggedOutHandeler = () => {
    setToken(null);
  };
  let deleteClickHandler = async (key) => {
    let response = await fetch(
      `https://authenticate-app-70c08-default-rtdb.firebaseio.com/Data/${key}.json`,
      {
        method: "DELETE",
      }
    );
  };
  let isVisibleClickHandler = async (key) => {
    await fetch(
      `https://authenticate-app-70c08-default-rtdb.firebaseio.com/Data/${key}/isVisible.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ value: false }),
      }
    );
  };
  let funGet = async () => {
    try {
      let res1 = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDpF4EV9Rf0fIb8ugGwavpNHHVDKCFDDjw",
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

  let Fun = async () => {
    array = [];
    let respnse = await fetch(
      `https://authenticate-app-70c08-default-rtdb.firebaseio.com/Data.json`
    );
    let data = await respnse.json();
    for (let key in data) {
      array.push({ key, ...data[key] });
    }
    setArray(array);
  };

  useEffect(() => {
    funGet();
    setInterval(() => {
      Fun();
    }, 2000);
  }, [Token]);

  let context = {
    Token: Token,
    isLoggedIn: userLoggedIn,
    login: loggedInHandeler,
    logOut: loggedOutHandeler,
    ID: ID,
    arr: arr,
    email: email,
    array: array,
    isVisible: isVisibleClickHandler,
    getData: Fun,
    getDataOfSingleEmail: emailHandler,
    daleteSingleEmail: deleteClickHandler,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
