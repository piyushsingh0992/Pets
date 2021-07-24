import { apiCall } from "../../apiCall";
import axios from "axios";


function setupAuthHeaderForServiceCalls(token) {
  console.log("token ->",token);
  
  if (token) {
    return (axios.defaults.headers.common["auth"] = token);
  }
  delete axios.defaults.headers.common["auth"];
}


export async function authChecker(signInDetails,loginDispatch, toastDispatch) {
  
    let { data, success, message } = await apiCall(
      "POST",
      "auth",
      signInDetails
    );

    if (success === true) {
      setupAuthHeaderForServiceCalls(data.token)
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
