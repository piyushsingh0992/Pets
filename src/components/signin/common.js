import { apiCall } from "../../apiCall/apiCall.js";

export async function authChecker(signInDetails,loginDispatch, toastDispatch) {
  
    let { data, success, message } = await apiCall(
      "POST",
      "auth",
      signInDetails
    );

    if (success === true) {
      loginDispatch({
        type: "LOGIN",
        payload: { loginStatus: true, token: data.token },
      });

      localStorage.setItem(
        "loginStatus",
        JSON.stringify({
          loginStatus: true,
          token: data.token,
        })
      );
    } else {
      toastDispatch("error", message);
    }
  
}
