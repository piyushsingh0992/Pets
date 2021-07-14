export function loginHandler(state, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      localStorage.removeItem("loginStatus");
      return false;
    default:
      return false;
  }
}
