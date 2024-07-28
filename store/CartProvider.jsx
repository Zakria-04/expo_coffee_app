import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cart, setCart] = useState(["h"]);
  const CartProvider = {
    cart,
    setCart,
  };
  return (
    <CartContext.Provider value={CartProvider}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
