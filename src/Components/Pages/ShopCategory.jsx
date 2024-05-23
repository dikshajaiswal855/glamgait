import React from "react";
// import "../PagesCSS/ShopCategory.css";
import Item from "../Item/Item.jsx";
import menmain from "../assets/men ca-1,28,26/MEN_Main_category_5_1296x.jpg"
import womenmain from "../assets/women/bg_slideshow_h1_1_1296x.jpg"
import kidsm from "../assets/kids/KidsCollection_CategoryImage_1296x.jpg"
import {data_product,data_product_men,data_product_women,data_product_kids} from "../assets/data.js";

const ShopCategory = ({ category }) => {
  return (
    <div className="main_shop_category ">
      <div className="shop_category_hero ">
        <div className="flex items-center justify-center">
          {
            category ==="men" &&
            <img className=" p-4" src={menmain} alt="" />
          }
          {
            category ==="women" &&
            <img className="p-4" src={womenmain} alt="" />
          }
          {
            category ==="kid" &&
            <img className="p-4" src={kidsm} alt="" />
          }
        </div>
        <h1 className="shop_category_main_heading pt-10 text-black font-bold text-3xl md:text-4xl text-center">Popular in {category}</h1>
        <div className=" items-center w-full h-auto flex flex-wrap flex-col">
        <div className="w-36 h-1 border-b-4 border-teal-300 mt-2 mb-7 md:mt-4 "></div>
        </div>
        <div className="shop_category_popular_item w-full flex flex-wrap justify-evenly text-black ">
          
            {category ==="men" && data_product_men.map((item, i) => (
              <Item 
              key={i}
              id={item.id}
              name ={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
              />
            ))}
            {category ==="women" && data_product_women.map((item, i) => (
              <Item 
              key={i}
              id={item.id}
              name ={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
              />
            ))}
            
            {category ==="kid" && data_product_kids.map((item, i) => (
              <Item 
              key={i}
              id={item.id}
              name ={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
