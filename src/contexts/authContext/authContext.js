import { createContext, useContext, useEffect, useReducer } from "react";

import { loginHandler } from "./reducer.js";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, loginDispatch] = useReducer(loginHandler, {
    loginStatus: false,
    token: null,
  });


  function setupAuthHeaderForServiceCalls(token) {
  
    if (token) {
      return (axios.defaults.headers.common["auth"] = token);
    }
    delete axios.defaults.headers.common["auth"];
  }

  useEffect(() => {
    let response = JSON.parse(localStorage.getItem("loginStatus")) || {
      loginStatus: false,
      token: null,
    };
    setupAuthHeaderForServiceCalls(response.token);
    loginDispatch({ type: "LOGIN", payload: response });
  }, []);

  return (
    <AuthContext.Provider value={{ login, loginDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
