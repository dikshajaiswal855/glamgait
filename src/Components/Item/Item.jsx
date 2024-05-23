import React from "react";
// import "./Item.css";
import "../assets/data.js"

const Item = (props) => {
  return (
    <div className="item w-46 flex flex-col items-center mb-12 hover:border-2 border-teal-300 duration-300 ease-in-out ">
      <img className="w-[19.4rem] h-full" src={props.image} alt="image" />
      <p className="text-1xl font-bold mt-2">{props.name}</p>
      <div className="item_prices flex flex-col text-center mt-1">
        <div className="item_prices_new text-1xl font-bold mt-1 ">₹{props.new_price}</div>
        <div className="item_prices_old text-1xl font-bold mt-1 text-gray-400 line-through">₹{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
