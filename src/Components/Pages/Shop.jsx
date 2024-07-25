import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers"

const Shop = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Popular />
      {/* <Offers/> */}
    </div>
  );
};

export default Shop;
