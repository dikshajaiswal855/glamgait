import React, { useContext } from "react";
import Item from "../Item/Item.jsx";
import dropdownicon from "../assets/down-arrow.png";

import { ShopContext } from "../../Context/ShopContext.jsx";


const ShopCategory = (props) => {
  const{dataa_product} = useContext(ShopContext)
  return (
    <div className="main_shop_category ">
      <div className="shop_category_hero ">
        <div className="flex items-center justify-center">
          <img src={props.banner} alt="" />
          
        </div>

        <h1 className="shop_category_main_heading pt-10 text-black font-bold text-3xl md:text-4xl text-center">Popular in {props.category}</h1>
        <div className=" items-center w-full h-auto flex flex-wrap flex-col">
        <div className="w-36 h-1 border-b-4 border-teal-300 mt-2 mb-7 md:mt-4 "></div>
        </div>
        <div className="shopCategory-indexSort flex pr-5 py-2 justify-between ">
            <p className=" px-5 py-2.5">
              <span className="font-semibold">Showing 1-12</span> out of 36 products
            </p>
            {/* <div className="shopCategory-Sort px-5 py-2.5 rounded-full border border-gray-500"> */}
            <div className="shopCategory-Sort flex px-5 py-2.5 rounded-full border border-gray-500">
              Sort by<img className="w-5" src={dropdownicon} alt=""/>
            </div>
          </div>
        <div className="shop_category_popular_item px-4 w-full flex flex-wrap justify-evenly text-black ">
          
            {/* {dataa_product.map((item,i) => {
              if(props.category===item.category){

                return <Item 
                key={i}
                id={item.id}
                name ={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
                />
              }
              else{
                  return null;
                }
              })} */}
              
{dataa_product && Array.isArray(dataa_product) ? (
  dataa_product.map((item, i) => {
    if (props.category === item.category) {
      return (
        <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          old_price={item.old_price}
          new_price={item.new_price}
        />
      );
    } else {
      return null;
    }
  })
) : (
  <p>No products available</p>
)}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;


// import React from "react";
// // import "../PagesCSS/ShopCategory.css";
// import Item from "../Item/Item.jsx";
// import menmain from "../assets/men ca-1,28,26/MEN_Main_category_5_1296x.jpg"
// import womenmain from "../assets/women/bg_slideshow_h1_1_1296x.jpg"
// import kidsm from "../assets/kids/KidsCollection_CategoryImage_1296x.jpg"
// import {data_product,data_product_men,data_product_women,data_product_kids} from "../assets/data.js";

// const ShopCategory = ({ category }) => {
//   return (
//     <div className="main_shop_category ">
//       <div className="shop_category_hero ">
//         <div className="flex items-center justify-center">
//           {
//             category ==="men" &&
//             <img className=" p-4" src={menmain} alt="" />
//           }
//           {
//             category ==="women" &&
//             <img className="p-4" src={womenmain} alt="" />
//           }
//           {
//             category ==="kid" &&
//             <img className="p-4" src={kidsm} alt="" />
//           }
//         </div>
//         <h1 className="shop_category_main_heading pt-10 text-black font-bold text-3xl md:text-4xl text-center">Popular in {category}</h1>
//         <div className=" items-center w-full h-auto flex flex-wrap flex-col">
//         <div className="w-36 h-1 border-b-4 border-teal-300 mt-2 mb-7 md:mt-4 "></div>
//         </div>
//         <div className="shop_category_popular_item w-full flex flex-wrap justify-evenly text-black ">
          
//             {category ==="men" && data_product_men.map((item, i) => (
//               <Item 
//               key={i}
//               id={item.id}
//               name ={item.name}
//               image={item.image}
//               old_price={item.old_price}
//               new_price={item.new_price}
//               />
//             ))}
//             {category ==="women" && data_product_women.map((item, i) => (
//               <Item 
//               key={i}
//               id={item.id}
//               name ={item.name}
//               image={item.image}
//               old_price={item.old_price}
//               new_price={item.new_price}
//               />
//             ))}
            
//             {category ==="kid" && data_product_kids.map((item, i) => (
//               <Item 
//               key={i}
//               id={item.id}
//               name ={item.name}
//               image={item.image}
//               old_price={item.old_price}
//               new_price={item.new_price}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;
