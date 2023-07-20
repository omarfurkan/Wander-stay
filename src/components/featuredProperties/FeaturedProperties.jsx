import React from "react";
import "./featuredproperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("hotels?featured=true");
  console.log(data);
  return (
    <div className="fp">
      {loading ? (
        "Loadign"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img className="fpImg" src={item?.photos[0]} alt="" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span> <br />
              <span className="fpPrice">
                Starting from ${item.cheapestprice}
              </span>
              {item?.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
