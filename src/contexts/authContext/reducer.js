export function loginHandler(state, action) {
  
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return payload;
    case "LOGOUT":
      localStorage.removeItem("loginStatus");
      return {
        loginStatus: false,
        token: null,
      };
    default:
      return false;
  }
}
