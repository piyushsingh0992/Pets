import axios from "axios";

function setupAuthHeaderForServiceCalls(token) {
  if (token) {
    return (axios.defaults.headers.common["auth"] = token);
  }
  delete axios.defaults.headers.common["auth"];
}

export function loginHandler(state, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return payload;
    case "LOGOUT":
      setupAuthHeaderForServiceCalls(null);
      localStorage.removeItem("loginStatus");
      return {
        loginStatus: false,
        token: null,
      };
    default:
      return false;
  }
}
