import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { loginHandler } from "./reducer.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, loginDispatch] = useReducer(loginHandler, false);

  async function authChecker(userId, password) {
    try {
      let { data } = await axios.post(
        `https://pets.piyushsingh6.repl.co/authCheck`,
        {
          userId,
          password,
        }
      );
      if (data.status === "success") {
        loginDispatch({ payload: "LOGIN" });
        localStorage.setItem(
          "loginStatus",
          JSON.stringify({ loginStatus: true })
        );
      }
    } catch (error) {
      console.error({ error });
    }
  }

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));
    login && login.loginStatus && loginDispatch({ payload: "LOGIN" });
  }, []);

  return (
    <AuthContext.Provider value={{ login, authChecker, loginDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
