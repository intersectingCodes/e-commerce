import axios from "axios";
import React, { useEffect, useState } from "react";
import Aside from "../components/Aside/aside";
import Product from "../components/Product";

const Main = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  // console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  const baseUrl = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    try {
      const { data } = await axios.get(baseUrl);
      setProducts(data);
      console.log(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">{loading ? "Loading" : "Bizim Store"}</h1>
      <div className="col d-flex">
        <Aside className="row-1" products={products} />
        <div className="row justify-content-center g-3">
          {products?.map((product) => {
            return (
              <Product
                addToCart={addToCart}
                key={product.id}
                {...product}
                isProduct={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
