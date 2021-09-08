import { setupAuthHeaderForServiceCalls } from "../../utils/common.js";
export function loginHandler(state, action) {
  let { type, payload } = action;

  switch (type) {
    case "LOGIN":
      setupAuthHeaderForServiceCalls(payload.token);
      localStorage.setItem(
        "loginStatus",
        JSON.stringify({
          loginStatus: true,
          token: payload.token,
          userName: payload.user,
          userId: payload.userId,
        })
      );
      return payload;
    case "LOGOUT":
      setupAuthHeaderForServiceCalls(null);
      localStorage.removeItem("loginStatus");
      return {
        loginStatus: false,
        token: null,
        userName: null,
        userId: null,
      };
    default:
      return false;
  }
}
