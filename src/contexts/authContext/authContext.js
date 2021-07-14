import { createContext, useContext, useEffect, useReducer } from "react";

import { loginHandler } from "./reducer.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, loginDispatch] = useReducer(loginHandler, {
    loginStatus: false,
    token: null,
  });
  console.log("login ->", login);
  useEffect(() => {
    let response = JSON.parse(localStorage.getItem("loginStatus")) || {
      loginStatus: false,
      token: null,
    };
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
