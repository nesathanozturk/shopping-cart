import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCardContext";

function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export default useShoppingCartContext;
