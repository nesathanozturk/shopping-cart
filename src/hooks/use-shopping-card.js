import { useContext } from "react";
import ShoppingCardContext from "../context/ShoppingCardContext";

function useShoppingCardContext() {
  return useContext(ShoppingCardContext);
}

export default useShoppingCardContext;
