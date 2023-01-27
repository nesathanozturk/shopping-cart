import { createContext, useState, useEffect } from "react";

const ShoppingCart = createContext();

function Provider({ children }) {
  const [basketItems, setBasketItems] = useState([]);

  const handleChange = (product, d) => {
    const ind = basketItems.indexOf(product);
    const arr = basketItems;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setBasketItems([...arr]);
  };

  const addItemAtBasket = (product) => {
    const updatedBasketItems = [...basketItems, product];
    setBasketItems(updatedBasketItems);
  };

  const removeItemAtBasket = (product) => {
    const updatedBasketItems = basketItems.filter(
      (basketItem) => basketItem.id !== product.id
    );
    setBasketItems(updatedBasketItems);
  };

  const valueToShare = {
    basketItems,
    addItemAtBasket,
    removeItemAtBasket,
  };

  return (
    <ShoppingCart.Provider value={valueToShare}>
      {children}
    </ShoppingCart.Provider>
  );
}

export { Provider };
export default ShoppingCart;
