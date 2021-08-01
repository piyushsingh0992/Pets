import { themeManager } from "./reducer.js";
import { day, night } from "./data.js";

test("Change to dark theme", () => {
  const initialState = day;
  const action = { payload: "night" };
  let result = themeManager(initialState, action);
  const expectedState = night;
  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    "activetheme",
    JSON.stringify({ payload: "night" })
  );

  expect(result).toStrictEqual(expectedState);
});

test("Change to day theme", () => {
  const initialState = night;

  const action = { payload: "day" };
  let result = themeManager(initialState, action);
  const expectedState = day;

  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    "activetheme",
    JSON.stringify({ payload: "day" })
  );

  expect(result).toStrictEqual(expectedState);
});
