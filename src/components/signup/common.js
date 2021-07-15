import { apiCall } from "../../apiCall/apiCall.js";

export async function createAccount(signUpDetails, toastDispatch) {
  try {
    let { data, success, message } = await apiCall(
      "POST",
      `auth/create`,
      signUpDetails
    );

    if (success === true) {
      toastDispatch("success", data.message);
    } else {
      toastDispatch("error", message);
    }
  } catch (error) {
    toastDispatch("error", "Error ! Cann't create new account");
  }
}
