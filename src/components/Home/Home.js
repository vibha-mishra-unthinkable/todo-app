import React from "react";
import Feed from "../Feed/Feed";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <>
      <Layout children={<Feed />} />
    </>
  );
};

export default Home;
