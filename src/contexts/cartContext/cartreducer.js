export function cartManager(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "FIRST_LOAD":
      return payload;
    case "ADD":
      return [...state, payload];
    case "REMOVE":
      return state.filter((item) => {
        if (item.id === payload.id) {
          return false;
        } else {
          return true;
        }
      });

    case "INCREASE":
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case "DECREASE":
      if (payload.quantity < 1) {
        return state?.filter((item) => {
          if (item.id === payload.id) {
            return false;
          }
          return true;
        });
      }
      return state?.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    case "LOGOUT":
      console.log("cart logout");
      return [];
    default:
      return state;
  }
}
