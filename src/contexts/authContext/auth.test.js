import { loginHandler } from "./reducer";

test("checking loggin in ", () => {
  const initialState = {
    loginStatus: false,
    token: null,
  };

  const action = {
    type: "LOGIN",
    payload: {
      loginStatus: true,
      token: "abc123",
    },
  };

  const expectedState = {
    loginStatus: true,
    token: "abc123",
  };
  const result = loginHandler(initialState, action);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    "loginStatus",
    JSON.stringify({
      loginStatus: true,
      token: action.payload.token,
    })
  );
  expect(result).toEqual(expectedState);
});

test("checking loggin Out ", () => {
  const initialState = {
    loginStatus: true,
    token: "abc123",
  };

  const expectedState = {
    loginStatus: false,
    token: null,
  };

  const action = {
    type: "LOGOUT",
  };

  const result = loginHandler(initialState, action);
  expect(localStorage.removeItem).toHaveBeenLastCalledWith("loginStatus");
  expect(result).toEqual(expectedState);
});
