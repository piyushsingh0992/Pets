import { themeManager } from "./reducer.js";
import { day, night } from "./data.js";

test("Change to dark theme", () => {

  //define initial State for reducer
  const initialState ;
  // define action for  themeReducer
  const action ;

  // get result for 
  let result = themeManager(initialState, action);
  const expectedState = night;

  //test if local storage is getting called or not
  // first mock the local storage



  // check of your expected state match the result
  
});

test("Change to day theme", () => {
  //define initial State for reducer
  const initialState ;
  // define action for  themeReducer
  const action ;

  // get result for 
  let result = themeManager(initialState, action);
  const expectedState = day;

  //test if local storage is getting called or not
  // first mock the local storage



  // check of your expected state match the result
});



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
