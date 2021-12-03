import React from "react";
import { MDBCol } from "mdbreact";

const SearchProducts = (props) => {
  const { setSearchedText, items, setSearchedData } = props;
  const handleChange = (e) => {
    let search = e.target.value;

    const data = items.filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase())
    );

    setSearchedText(search);
    setSearchedData(data);
  };
  return (
    <>
      <MDBCol md="6" className=" row justify-content-md-center">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
          />
        </div>
      </MDBCol>
    </>
  );
};

export default SearchProducts;
