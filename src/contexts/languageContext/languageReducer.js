import {
  English,
  Hindi,
  Gujrati,
  Bangla,
  Marathi,
  Spanish,
  French,
  Italian,
} from "./data.js";

export function languageReduer(state, action) {
  const { payload } = action;

  switch (payload) {
    case "English":
      return English;
    case "Hindi":
      return Hindi;
    case "Gujrati":
      return Gujrati;
    case "Bangla":
      return Bangla;
    case "Marathi":
      return Marathi;
    case "Spanish":
      return Spanish;

    case "French":
      return French;

    case "Italian":
      return Italian;
    default:
      return English;
  }
}
