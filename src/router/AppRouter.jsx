import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Navbar from "../components/Navbar";
import CartContextProvider from "../context/CartContext";
import UserContextProvider from "../context/UserContext";

import Login from "../pages/Login";
import Main from "../pages/Main";
import ProductDetail from "../pages/ProductDetail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <div style={{ height: "90px" }}></div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<PrivateRouter />}>
              <Route path="" element={<CardContainer />} />
            </Route>
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default AppRouter;
