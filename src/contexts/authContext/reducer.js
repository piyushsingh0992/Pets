export function loginHandler(state, action) {
  let { payload } = action;
  switch (payload) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      localStorage.removeItem("loginStatus"); 
      return false;
    default:
      return false;
  }
}
