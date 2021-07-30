import { } from "./reducer.js"



test("reset the toast state ", () => {
    const initialState = {};
    const action = { type: "",message:"" };
    let result = wishListManager(initialState, action);
  
    const expectedState = {};
  
    expect(result).toEqual(expectedState);
  });
  