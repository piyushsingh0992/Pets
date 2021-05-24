export function wishListManager(state, action) {
  const { type, payload } = action;
  
 
  let present = state.find((item) => item.id === payload.id);
  
  switch (type) {
    case "FIRST_LOAD":
      return payload;

    case "ADD":

      if (present) {
        return state;
      }
      return [...state, payload];
      

    case "REMOVE":
     
      return state.filter((item) => {
        if (item.id === payload.id) {
          return false;
        }
        return true;
      });

    default:
      return state;
  }
}
