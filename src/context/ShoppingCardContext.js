import { createContext, useState, useEffect } from "react";

const ShoppingCard = createContext();

function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const addItemAtBasket = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
  };

  const handleChangeAmount = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePrice = () => {
    let productPrice = 0;
    cart.map((product) => (productPrice += product.amount * product.price));
    setPrice(productPrice);
  };

  useEffect(() => {
    handlePrice();
  });

  const removeItemAtBasket = (id) => {
    const updatedBasketItems = cart.filter((product) => product.id !== id);
    setCart(updatedBasketItems);
  };

  const valueToShare = {
    cart,
    setCart,
    price,
    setPrice,
    handleChangeAmount,
    handlePrice,
    addItemAtBasket,
    removeItemAtBasket,
  };

  return (
    <ShoppingCard.Provider value={valueToShare}>
      {children}
    </ShoppingCard.Provider>
  );
}

export { Provider };
export default ShoppingCard;
