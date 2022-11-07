import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Product from "./Product";

const CardContainer = () => {
  const { card } = useContext(CartContext);
  return (
    <div className="container">
      <h2 className="text-center display-1 text-danger">CART</h2>
      <div className="row justify-content-center g-3">
        {card.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
