export function loginHandler(state, action) {
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
  