import React from 'react'
import {data_product , data_product_men , data_product_women , data_product_kids} from "../assets/data";
import Item from "../Item/Item";

function RelatedProducts() {
    return (
        <div className="popular bg-white h-auto w-100 flex flex-wrap flex-col items-centre text-centre mt-20 ">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
      <h1 className="text-black font-bold text-3xl md:text-4xl text-center">Related Products</h1>
      <div className="w-36 h-1 border-b-4 border-teal-300 mt-2 mb-4 md:mt-4 "></div>
      </div>
      <div className="popular_item w-full flex flex-wrap justify-evenly  text-black">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
          />
        ))}
      </div>
      {/* <div className="popular_button text-center">
        <button className="text-black mt-6 bg-teal-200 py-3 px-4 text-2xl font-bold md:text-3xl rounded-md">Explore More &#8594; </button>
      </div> */}
    </div>
    )
}

export default RelatedProducts;
