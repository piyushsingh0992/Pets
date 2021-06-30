export function cartManager(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "FIRST_LOAD":
      return payload;
    case "ADD":
      return [...state, payload];
    case "REMOVE":
      return state.filter((item) => {
        if (item._id === payload._id) {
          return false;
        } else {
          return true;
        }
      });
    case "INCREASE":
      return state.map((item) => {
        if (item._id === payload._id) {
          return payload;
        }
        return item;
      });
    case "DECREASE":
      if (payload.quantity < 1) {
        return state?.filter((item) => {
          if (item._id === payload._id) {
            return false;
          }
          return true;
        });
      }

      return state?.map((item) => {
        if (item._id === payload._id) {
          return payload;
        }
        return item;
      });

    // return state?.map((item) => {
    //   if (item._id === payload._id) {
    //     return { ...item, quantity: item.quantity - 1 };
    //   }
    //   return item;
    // });
    case "LOGOUT":
      return [];
    default:
      return state;
  }
}
