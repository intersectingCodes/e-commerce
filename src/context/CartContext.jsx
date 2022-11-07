import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const addToCart = (newCard) => {
    console.log("product clicked", newCard);
    setCard([...card, newCard]);
  };

  const removeCard = (id) => {
    console.log(id);
    const filteredCard = card.filter((item) => item.id !== id);
    setCard(filteredCard);
  };

  return (
    <CartContext.Provider value={{ card, addToCart, removeCard }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
