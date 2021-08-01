import { useAuth } from "../contexts/authContext";
import { useCart } from "../contexts/cartContext";
import { useWishlist } from "../contexts/wishlistContext";

export function useLogout() {
  const { loginDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  return function () {
    loginDispatch({ type: "LOGOUT" });
    cartDispatch({ type: "LOGOUT" });
    wishlistDispatch({ type: "LOGOUT" });
  };
}
