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
import { languageReduer } from "./reducer.js";

test("changing language to French", () => {
  const initialState = French;
  const action = { type: "French" };
  let result = languageReduer(initialState, action);

  const expectedState = French;

  expect(result).toStrictEqual(expectedState);
});

test("changing language to Italian", () => {
  const initialState = Italian;
  const action = { type: "Italian" };
  let result = languageReduer(initialState, action);

  const expectedState = Italian;
  expect(result).toEqual(expectedState);
});

test("changing language to Bangla", () => {
  const initialState = Bangla;
  const action = { type: "Bangla" };
  let result = languageReduer(initialState, action);

  const expectedState = Bangla;

  expect(result).toStrictEqual(expectedState);
});
test("changing language to Marathi", () => {
  const initialState = Marathi;
  const action = { type: "Marathi" };
  let result = languageReduer(initialState, action);

  const expectedState = Marathi;

  expect(result).toStrictEqual(expectedState);
});
test("changing language to Spanish", () => {
  const initialState = Spanish;
  const action = { type: "Spanish" };
  let result = languageReduer(initialState, action);

  const expectedState = Spanish;

  expect(result).toStrictEqual(expectedState);
});
test("changing language to Hindi", () => {
  const initialState = Hindi;
  const action = { type: "Hindi" };
  let result = languageReduer(initialState, action);

  const expectedState = Hindi;

  expect(result).toStrictEqual(expectedState);
});
test("changing language to Gujrati", () => {
  const initialState = Gujrati;
  const action = { type: "Gujrati" };
  let result = languageReduer(initialState, action);

  const expectedState = Gujrati;

  expect(result).toStrictEqual(expectedState);
});

test("changing language to English", () => {
  const initialState = English;
  const action = { type: "English" };
  let result = languageReduer(initialState, action);

  const expectedState = English;

  expect(result).toStrictEqual(expectedState);
});
