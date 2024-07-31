import React, {useContext} from "react";
import {ShopContext} from '../../../src/Context/ShopContext';
import Breadcrum from "../Breadcrums/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

const Product = () => {
  const {dataa_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=dataa_product.find((e)=>e.id===Number(productId));
  return(
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
  </div>
  ) ;
};

export default Product;
