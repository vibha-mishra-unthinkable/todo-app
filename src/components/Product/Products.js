import React from "react";
import Layout from "../Layout/Layout";
import ViewProducts from "../ViewProduct/ViewProducts";
import "../../assets/styles/Products.css";

const Products = () => {
  return (
    <div className="products">
      <Layout children={<ViewProducts />} />
    </div>
  );
};

export default Products;
