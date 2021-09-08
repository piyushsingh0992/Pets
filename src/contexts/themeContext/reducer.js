import { day, night } from "./data.js";

// export function themeManager(state, action) {
//   const { payload } = action;
//   switch (payload) {
//     case "day":

//     return state  ;
//     case "night":

//     return state ;
//     default:
//       return day;
//   }
// }

// without local storage

// export function themeManager(state, action) {
//   const { payload } = action;
//   switch (payload) {
//     case "day":
//       return day;
//     case "night":
//       return night;
//     default:
//       return day;
//   }
// }

// with local storage

// export function themeManager(state, action) {
//   const { payload } = action;
//   switch (payload) {
//     case "day":
//       localStorage.setItem("activetheme", JSON.stringify({ payload: "day" }));
//       return day;
//     case "night":
//       localStorage.setItem("activetheme", JSON.stringify({ payload: "night" }));
//       return night;
//     default:
//       return day;
//   }
// }

//final answer

export function themeManager(state, action) {
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
