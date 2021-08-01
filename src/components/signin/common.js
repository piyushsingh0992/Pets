import { apiCall } from "../../apiCall";

export async function authChecker(
  signInDetails,
  loginDispatch,
  toastDispatch,
  loaderSetter
) {
  loaderSetter(true);

  let { data, success, message } = await apiCall("POST", "auth", signInDetails);

  if (success === true) {
    loginDispatch({
      type: "LOGIN",
      payload: { loginStatus: true, token: data.token },
    });
  } else {
    toastDispatch({ type: "error", message });
  }
  loaderSetter(false);
}
