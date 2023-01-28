import { useContext } from "react";
import ShoppingCard from "../context/ShoppingCardContext";

function useShoppingCardContext() {
  return useContext(ShoppingCard);
}

export default useShoppingCardContext;
