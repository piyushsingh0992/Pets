import { apiCall } from "../apiCall";

import { useToast } from "../contexts/toastContext";

export function useCreateAccount({
  signUpDetailsSetter,
  signInDetailsSetter,
  userSetter,
  loaderSetter,
}) {
  const { toastDispatch } = useToast();

  return async function () {
    let self = this;
    let args = arguments;
    loaderSetter(true);
    let { data, success, message } = await apiCall(
      "POST",
      `auth/create`,
      args[0]
    );

    if (success === true) {
      toastDispatch({ type: "success", message: data.message });
      signInDetailsSetter({
        password: args[0].password,
        userId: args[0].userId,
      });
      signUpDetailsSetter({
        userName: "",
        password: "",
        userId: "",
      });
      userSetter((value) => !value);
    } else {
      toastDispatch({ type: "error", message });
    }
    loaderSetter(false);
  };
}
