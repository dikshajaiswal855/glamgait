import React ,{createContext}from "react";
import dataa_product from "../Components/assets/dataa";

export const ShopContext= createContext(null);

const ShopContextProvider=(props)=>{
    const contextValue = {dataa_product};
    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

 export default ShopContextProvider;