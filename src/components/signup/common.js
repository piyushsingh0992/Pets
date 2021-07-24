import { apiCall } from "../../apiCall";

export async function createAccount(
  signUpDetails,
  toastDispatch,
  signUpDetailsSetter,
  signInDetailsSetter,
  userSetter,
  loaderSetter
) {  loaderSetter(true)

    let { data, success, message } = await apiCall(
      "POST",
      `auth/create`,
      signUpDetails
    );

    if (success === true) {
      toastDispatch("success", data.message);
      signInDetailsSetter({
        password: signUpDetails.password,
        userId: signUpDetails.userId,
      });
      signUpDetailsSetter({
        userName: "",
        password: "",
        userId: "",
      });
      userSetter((value) => !value);
    } else {
      toastDispatch("error", message);
    }
    loaderSetter(false);
  
}
