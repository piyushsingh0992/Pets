import { day, night } from "./data.js";

export function themeReducer(state, action) {
  const { payload } = action;
  switch (payload) {
    case true:
      return day;
    case false:
      return night;
    default:
      return day;
  }
}
