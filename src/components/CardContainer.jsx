import React from "react";
import Product from "./Product";

const CardContainer = ({ card, removeCard }) => {
  return (
    <div className="container">
      <h2 className="text-center display-1 text-danger">CART</h2>
      <div className="row justify-content-center g-3">
        {card.map((item) => (
          <Product key={item.id} {...item} removeCard={removeCard} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
