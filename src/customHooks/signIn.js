import { apiCall } from "../apiCall";
import { useAuth } from "../contexts/authContext";
import { useToast } from "../contexts/toastContext";

export function useAuthChecker(loaderSetter) {
  const { loginDispatch } = useAuth();
  const { toastDispatch } = useToast();

  return async function () {
    let self = this;
    let args = arguments;

    loaderSetter(true);

    let { data, success, message } = await apiCall("POST", "auth", args[0]);

    if (success === true) {
      
      loginDispatch({
        type: "LOGIN",
        payload: {
          loginStatus: true,
          token: data.token,
          user: data.user.userName,
          userId: data.user.userId,
        },
      });
    } else {
      toastDispatch({ type: "error", message });
    }
    loaderSetter(false);
  };
}
