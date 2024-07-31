import React from 'react'
import star_ic from "../assets/star.png";
import half_star from "../assets/rating.png";
const ProductDisplay=(props)=> {
    const {product}=props;
    return (
        <div className='productdisplay gap-2 mt-4 mb-4 flex flex-col  md:flex-row px-10 '>
            <div className='productdisplay-left mb-1  md:w-[50%] '>
                {/* <div className='productdisplay-img-list'>

                </div> */}
            <div className='productdisplay-img  '>
                <img className='productdisplay-main-img px-20 outline-teal-300 outline-double outline-4 outline-offset-6 rounded-full ' src={product.image} alt="" />
            </div>
            </div>
            <div className="product-display-right items-center flex flex-col md:w-[50%]">
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
                        <div className='border-2 border-teal-300 rounded-full px-4'>6</div>
                        <div className='border-2 border-teal-300 rounded-full px-4'>7</div>
                        <div className='border-2 border-teal-300 rounded-full px-4'>8</div>
                        <div className='border-2 border-teal-300 rounded-full px-4'>9</div>
                        <div className='border-2 border-teal-300 rounded-full px-4'>10</div>
                        <div className='border-2 border-teal-300 rounded-full px-4'>11</div>
                    </div>
                </div>
                <button className='w-[200px] py-3 px-10 mt-8 rounded-md font-bold mb-2 bg-teal-300'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay
