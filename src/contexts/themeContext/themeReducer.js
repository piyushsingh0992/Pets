import { day, night } from "./data.js";

export function themeReducer(state, action) {
  const { payload } = action;
  switch (payload) {
    case "day":
      localStorage.setItem("activetheme", JSON.stringify({ payload: "day" }));
      return day;
    case "night":
      localStorage.setItem("activetheme", JSON.stringify({ payload: "night" }));
      return night;
    default:
      return day;
  }
}
