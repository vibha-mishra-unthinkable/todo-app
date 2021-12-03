import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fruits2 from "../../assets/images/fruits2.jpg";
import grocerystaples from "../../assets/images/grocerystaples.jpg";
import discount from "../../assets/images/discount.png";
import "../../assets/styles/App.css";
import "../../assets/styles/Feed.css";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Feed = () => {
  return (
    <div className="feed">
      <Carousel variant="dark" className="w-100">
        <Carousel.Item>
          <img
            className="d-block w-100 sliderImg"
            src={grocerystaples}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderImg"
            src={fruits2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 sliderImg"
            src={discount}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Feed;
