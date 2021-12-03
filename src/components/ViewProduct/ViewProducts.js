import React from "react";
import items from "../../Helper/items.js";
import Row from "react-bootstrap/Row";
import "../../assets/styles/ViewProducts.css";
import SearchProducts from "../SearchProduct/SearchProducts";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ViewProducts = () => {
  const [searchedData, setSearchedData] = useState(items);
  const [searchedText, setSearchedText] = useState("");

  return (
    <div className="viewProducts">
      <SearchProducts
        items={items}
        setSearchedData={setSearchedData}
        setSearchedText={setSearchedText}
      />
      <Row xs={1} md={4} className="g-4">
        {searchedData.length > 0 ? (
          searchedData.map((item, idx) => (
            <ProductCard item={item} key={item.id} />
          ))
        ) : (
          <h3>No Product available</h3>
        )}
      </Row>
    </div>
  );
};

export default ViewProducts;
