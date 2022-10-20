import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
// import { data as products } from "./helpers/data";
import Aside from "./components/Aside/aside";
import axios from "axios";

function App() {
  const [card, setCard] = useState([]);
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
    <div>
      <Navbar cardTotal={card.length} />
      <div style={{ height: "90px" }}></div>
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
        <div className="mt-5 justify-content-center g-3">
          <h2 className="text-center display-1 text-danger">CART</h2>
          <CardContainer removeCard={removeCard} card={card} />
        </div>
      </div>
    </div>
  );
}

export default App;
