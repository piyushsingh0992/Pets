import { setupAuthHeaderForServiceCalls } from "../../utils/common.js";
export function loginHandler(state, action) {
  let { type, payload } = action;

  switch (type) {
    case "LOGIN":
      setupAuthHeaderForServiceCalls(payload.token);
      debugger;
      localStorage.setItem(
        "loginStatus",
        JSON.stringify({
          loginStatus: true,
          token: payload.token,
        })
      );
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
