import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";

import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  function loginHandler(state, action) {
    let { payload } = action;
    switch (payload) {
      case "LOGIN":
        return true;
      case "LOGOUT":
        return false;
      default:
        return false;
    }
  }
  const [login, loginDispatch] = useReducer(loginHandler, false);

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));
    login && login.loginStatus && loginDispatch({ payload: "LOGIN" });
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
