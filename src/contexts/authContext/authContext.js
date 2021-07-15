import { createContext, useContext, useEffect, useReducer } from "react";

import { loginHandler } from "./reducer.js";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, loginDispatch] = useReducer(loginHandler, {
    loginStatus: false,
    token: null,
  });
  // const navigate = useNavigate();

  function setupAuthHeaderForServiceCalls(token) {
  
    if (token) {
      return (axios.defaults.headers.common["auth"] = token);
    }
    delete axios.defaults.headers.common["auth"];
  }
  // function setupAuthExceptionHandler(loginDispatch, navigate) {
  //   const UNAUTHORIZED = 401;
  //   axios.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error?.response?.status === UNAUTHORIZED) {
  //         console.log("here");
  //         loginDispatch({ type: "LOGOUT" });
  //         navigate("login");
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }
  useEffect(() => {
    let response = JSON.parse(localStorage.getItem("loginStatus")) || {
      loginStatus: false,
      token: null,
    };
    setupAuthHeaderForServiceCalls(response.token);
    // setupAuthExceptionHandler(loginDispatch, navigate);
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
