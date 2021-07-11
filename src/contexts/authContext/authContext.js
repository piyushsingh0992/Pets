import { createContext, useContext, useEffect, useReducer } from "react";

import { loginHandler } from "./reducer.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
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
