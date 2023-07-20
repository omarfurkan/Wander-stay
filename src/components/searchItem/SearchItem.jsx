import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchIemt">
      <img src={item?.photos} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item?.name}</h1>
        <span className="siDistance">{item?.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item?.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this greate price today?
        </span>
      </div>
      <div className="siDetails">
        {item?.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
        )}
        <div className="siDetaiTexts">
          <span className="siPrice">${item?.cheapestprice}</span>
          <span className="siTaxOp">Includes taxs and fees</span>
          <Link to={`/hotels/${item?._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
