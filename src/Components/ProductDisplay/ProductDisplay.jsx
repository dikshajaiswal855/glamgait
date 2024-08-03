import React, { useContext } from 'react'
import star_ic from "../assets/star.png";
import half_star from "../assets/rating.png";
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay=(props)=> {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
    return (
        <div className='productdisplay mt-4 mb-4 flex flex-col gap-4 md:flex-row md:pl-20 md:pr-20'>
            <div className='productdisplay-left gap-4 mb-1 flex px-40 md:px-0 md:w-[60%] '>
                <div className='productdisplay-img-list flex flex-col  w-[210px] '>
                    <img className=' outline-teal-300 outline-double outline-4 outline-offset-6 mb-2 rounded-md' src={product.image} alt="" />
                    <img className=' outline-teal-300 outline-double outline-4 outline-offset-6 mb-2 rounded-md' src={product.image} alt="" />
                    <img className=' outline-teal-300 outline-double outline-4 outline-offset-6 mb-2 rounded-md' src={product.image} alt="" />
                    <img className=' outline-teal-300 outline-double outline-4 outline-offset-6 mb-2 rounded-md' src={product.image} alt="" />
                </div>
                <div className='productdisplay-img  '>
                <img className='productdisplay-main-img md:px-20 outline-teal-300 outline-double outline-4 outline-offset-6 rounded-md ' src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right items-center flex flex-col ">
                <h1 className='pt-20 font-bold text-3xl '>{product.name}</h1>
                <div className='product-display-right-star py-2 flex flex-row'>
                    <img className='w-5 h-5' src={star_ic} alt="" />
                    <img className='w-5 h-5' src={star_ic} alt="" />
                    <img className='w-5 h-5' src={star_ic} alt="" />
                    <img className='w-5 h-5' src={star_ic} alt="" />
                    <img className='w-5 h-5' src={half_star} alt="" />
                    <p className='px-4 '>(132)</p>
                </div>
                <div className='productssplay-right-prices'>
                    <div className="priceold text-1xl font-bold mt-1 text-gray-400 line-through">${product.old_price}</div>
                    <div className="pricenew item_prices_new text-1xl font-bold mt-1">${product.new_price}</div>
                </div>
                <div className='product-size'>
                    <h1 className='text-2xl pt-4 font-bold pl-[120px]'>Select Size</h1>
                    <div className='productdisplay-right-size flex gap-5 '>
                        <div className='border-2 border-teal-300 rounded-md px-4'>6</div>
                        <div className='border-2 border-teal-300 rounded-md px-4'>7</div>
                        <div className='border-2 border-teal-300 rounded-md px-4'>8</div>
                        <div className='border-2 border-teal-300 rounded-md px-4'>9</div>
                        <div className='border-2 border-teal-300 rounded-md px-4'>10</div>
                        <div className='border-2 border-teal-300 rounded-md px-4'>11</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className='w-[200px] py-3 px-10 mt-8 rounded-md font-bold mb-2 bg-teal-300'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay
