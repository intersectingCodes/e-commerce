import React from "react";
import Category from "./category";
import { useState } from "react";

const Aside = (data) => {
  const { products } = data;
  const [categoryArray, setCategoryArray] = useState([]);
  const addToCategory = (item) => {
    setCategoryArray([...categoryArray, item]);
  };
  products.forEach((item) => {
    categoryArray.includes(item["category"]) || addToCategory(item.category);
  });
  return (
    <aside>
      <h1>Aside</h1>
      <div className="menu">
        {categoryArray.map((item, index) => {
          return <Category category={item} key={index} />;
        })}
      </div>
    </aside>
  );
};

export default Aside;
