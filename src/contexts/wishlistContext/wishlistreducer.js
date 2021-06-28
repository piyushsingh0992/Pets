export function wishListManager(state, action) {
  const { type, payload } = action;

  let present = state.find((item) => item._id === payload?._id);

  switch (type) {
    case "FIRST_LOAD":
      return payload;
    case "ADD":
      if (present) {
        return state;
      }
      return [...state, payload];
    case "REMOVE":
      return state.filter((item) => item._id !== payload._id);
    case "LOGOUT":
      return [];

    default:
      return state;
  }
}
