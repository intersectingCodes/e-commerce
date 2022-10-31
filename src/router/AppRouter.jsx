import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import ProductDetail from "../pages/ProductDetail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [card, setCard] = useState([]);
  const [user, setUser] = useState(false);

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
    <BrowserRouter>
      <Navbar cardTotal={card.length} />
      <div style={{ height: "90px" }}></div>
      <Routes>
        <Route path="/" element={<Main addToCart={addToCart} />} />
        <Route path="/cart" element={<PrivateRouter user={user} />}>
          <Route
            path=""
            element={<CardContainer removeCard={removeCard} card={card} />}
          />
        </Route>
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
