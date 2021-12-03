import React from "react";
import Layout from "../Layout/Layout";
import ViewCart from "../ViewCart/ViewCart";

const Cart = () => {
  return (
    <>
      <Layout children={<ViewCart />} />
    </>
  );
};

export default Cart;
