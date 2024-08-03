import React,{useContext} from 'react';
import { ShopContext } from '../../Context/ShopContext';
import removecart from '../../Components/assets/basket.png';

function CartItems() {
    const {getTotalCartAmount,dataa_product,cartItems,removeFromCart}=useContext(ShopContext);
    return (
        <div className='cartitems'>
            <hr />
            <div className='cartitems-format-main flex flex-row justify-between text-xl font-semibold px-[100px] pt-5'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {dataa_product.map((e)=>{
                // console.log(e);
                if(cartItems[e.id]>0)
                {
                    return(
                    <div>
                    <div className="cartitems-format flex  px-[100px]">
                        <img className='carticon-product-icon w-[60px]' src={e.image} alt="" />
                        <p className='ml-40 '>{e.name}</p>
                        <p className='ml-[94px]'>${e.new_price}</p>
                        <button className='cartitems-quantity ml-[180px] px-2 mt-[2.9px] pb-5 h-5 border-2 border-teal-300 rounded-md'>{cartItems[e.id]}</button>
                        <p className='ml-[180px] px-2'>${e.new_price*cartItems[e.id]}</p>
                        <img className='w-10 h-10 ml-40' onClick={()=>{removeFromCart(e.id)}} src={removecart} alt="" />
                    </div>
                    <hr />                   
                    </div>)
                }
                return null;
            })}
            <div className="cartitems-down flex md:flex-row md:justify-between px-[100px] mt-20">
                <div className="cartitems-total pb-10">
                    <h1 className='font-bold text-3xl pb-[20px]'>cart Totals</h1>
                    <div>
                        <div className="cartitems-totalitem flex justify-between w-[640px] text-xl pb-[5px]">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-totalitem flex justify-between text-xl pb-[5px]">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-totalitem flex justify-between text-xl pb-[5px]">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='text-2xl border-2 border-teal-300 rounded-md px-10 bg-teal-300'>Proceed  To  Checkout</button>
                </div>
                <div className="cartitems-promocode text-xl px-[50px]">
                    <p className=''>If you have a promo code, Enter it here </p>
                    <div className="cartitems-promobox flex justify-between ">
                        <input type="text" className='bg-gray-300 rounded-md w-[160px]' placeholder='   promo code'/>
                        <button className='bg-teal-300 px-2 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
