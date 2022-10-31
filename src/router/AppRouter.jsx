import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cart from "../pages/Cart";
import Main from "../pages/Main";
import ProductDetail from "../pages/ProductDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ height: "90px" }}></div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
