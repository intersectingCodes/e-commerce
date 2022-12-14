import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ category, id, image, price, title, isProduct }) => {
  // const { category, id, image, price, title } = props;
  const [number, setNumber] = useState(0);
  // const [removeCard, setRemoveCard] = useState(true);
  const { addToCart, removeCard } = useContext(CartContext);
  return (
    <div className="col">
      <div className="card m-auto" style={{ width: "18rem" }}>
        <img
          src={image}
          style={{ height: "18rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-truncate" title={title}>
            {title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        </div>
        <div className="card-body d-flex justify-content-between">
          <span className="fw-bold">{price}$</span>

          {isProduct ? (
            <i
              onClick={() => addToCart({ category, id, image, price, title })}
              className="fa-solid fa-cart-plus"
            ></i>
          ) : (
            <>
              <div>
                <button
                  onClick={() => setNumber(number > 0 ? number - 1 : number)}
                  style={{ width: "2rem" }}
                >
                  -
                </button>
                <input
                  onChange={() => setNumber()}
                  type="text"
                  value={number}
                  style={{ width: "2rem" }}
                />
                <button
                  onClick={() => setNumber(number + 1)}
                  style={{ width: "2rem" }}
                >
                  +
                </button>
              </div>
            </>
          )}
        </div>
        {!isProduct && (
          <div className="text-center">
            <button
              className="btn btn-danger text-white p-1"
              onClick={() => removeCard(id)}
              style={{ width: "12rem" }}
            >
              REMOVE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
