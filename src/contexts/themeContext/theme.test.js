import { themeManager } from "./reducer.js";
import { day, night } from "./data.js";

test("Change to dark theme", () => {
  const initialState = day;
  const action = { payload: "night" };

  localStorage.setItem("activetheme", JSON.stringify({ payload: "night" }));
  expect(localStorage.getItem("activetheme")).toEqual(
    JSON.stringify({ payload: "night" })
  );

  let result = themeManager(initialState, action);
  const expectedState = night;

  expect(result).toStrictEqual(expectedState);
});

test("Change to day theme", () => {
  const initialState = night;
  const action = { payload: "day" };

  localStorage.setItem("activetheme", JSON.stringify({ payload: "day" }));
  expect(localStorage.getItem("activetheme")).toEqual(
    JSON.stringify({ payload: "day" })
  );

  let result = themeManager(initialState, action);
  const expectedState = day;

  expect(result).toStrictEqual(expectedState);
});
