// import React, { useState, useContext } from "react";
// import burgr from "../../Components/assets/burger-side.png"
// import logo from "../assets/logo.jpg";
// import profile_logo from "../assets/profile_icon.jpg";
// import trolly from "../assets/trolley.png";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";

// function Navbar() {
//   const [menu, setMenu] = useState("shop");
//   const { getTotalCartItems } = useContext(ShopContext);
//   return (
//     // <div className="nav_main flex justify-between px-14 font-bold  py-4">
//     <div className="nav_main md:flex md:justify-between px-14 font-bold  py-4">
//       <img className="w-8 md:hidden" src={burgr} alt="" />
//       <div className="nav_logo_name w-10">
//         <img src={logo} alt="" />
//       </div>
//       {/* <div className="nav_details flex flex-row "> */}
//         {/* <div className="nav_main_headings "> */}
//           {/* <ul className="pt-2  flex justify-between   md:space-x-[2rem] lg:space-x-[4rem] xl:space-x-[5rem]"> */}
//           <ul className=" md:pt-2 z-[-1] md:z-auto md:flex md:justify-between   md:space-x-[2rem] lg:space-x-[4rem] xl:space-x-[5rem] ">
//             <li
//               onClick={() => {
//                 setMenu("shop");
//               }}
//               className="nav_list_items mt-1 md:mt-0 "
//             >
//               <Link style={{ textDecoration: "none", color: "Black" }} to="/">
//                 Shop
//               </Link>{" "}
//               {menu === "shop" ? (
//                 <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-8" />
//               ) : (
//                 <></>
//               )}
//             </li>
//             <li
//               onClick={() => {
//                 setMenu("Men");
//               }}
//               className="nav_list_items my-1 md:my-0"
//             >
//               <Link
//                 style={{ textDecoration: "none", color: "Black" }}
//                 to="/mens"
//               >
//                 Men
//               </Link>{" "}
//               {menu === "Men" ? (
//                 <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-7" />
//               ) : (
//                 <></>
//               )}
//             </li>
//             <li
//               onClick={() => {
//                 setMenu("Women");
//               }}
//               className="nav_list_items my-1 md:my-0"
//             >
//               <Link
//                 style={{ textDecoration: "none", color: "Black" }}
//                 to="/womens"
//               >
//                 Women
//               </Link>{" "}
//               {menu === "Women" ? (
//                 <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-12" />
//               ) : (
//                 <></>
//               )}
//             </li>
//             <li
//               onClick={() => {
//                 setMenu("Kids");
//               }}
//               className="nav_list_items my-1 md:my-0"
//             >
//               <Link
//                 style={{ textDecoration: "none", color: "Black" }}
//                 to="/kids"
//               >
//                 Kids
//               </Link>{" "}
//               {menu === "Kids" ? (
//                 <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-7" />
//               ) : (
//                 <></>
//               )}
//             </li>
//           </ul>
//         {/* </div> */}
//       {/* </div> */}
//       {/* <div className="nav_buttons flex justify-between  md:space-x-[0.4rem] lg:space-x-[0.5rem] xl:space-x-[1rem]"> */}
//       <div className="nav_buttons flex md:justify-between  md:space-x-[0.4rem] lg:space-x-[0.5rem] xl:space-x-[1rem]">
//         <button
//           className="login "
//           onClick={() => {
//             setMenu("Login");
//           }}
//         >
//           <Link
//             className="bg-[#5EEAD4] p-1 px-4 rounded-lg"
//             style={{ textDecoration: "none", color: "black" }}
//             to="/login"
//           >
//             <button className="navbar_login_button lg:text-sm "> Login</button>
//           </Link>
//           {menu === "Login" ? <></> : <></>}
//         </button>
//         <Link style={{ textDecoration: "none" }} to={"/cart"}>
//           <img className="w-8 pt-1" src={trolly} alt="" />
//           <div className="cart-count bg-red-600 pt-1 w-[16px] h-[16px] flex justify-center items-center mt-[-36px] ml-[28px] rounded-full text-[14px]  text-white">
//             {getTotalCartItems()}
//           </div>
//         </Link>
//         <Link style={{ textDecoration: "none" }} to={"/profile"}>
//           <img className="w-9" src={profile_logo} alt="" />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useContext } from "react";
import burgr from "../../Components/assets/burger-side.png";
import cross_for_nav from "../../Components/assets/cross_for_nav.png";
import logo from "../assets/logo.jpg";
import profile_logo from "../assets/profile_icon.jpg";
import trolly from "../assets/trolley.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav_main flex justify-between px-6 md:px-20 font-bold py-3.5 relative md:flex md:flex-row md:justify-between md:items-center">
      <div className="flex items-center">
        <button
          className="md:hidden "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img className="w-8" src={isMenuOpen ? cross_for_nav : burgr} alt="Menu Toggle" />
        </button>
        <div className="nav_logo_name w-9  ml-4 md:ml-0">
        <Link to="/">  <img src={logo} alt="Logo" /></Link>
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute bg-white px-6 md:px-0 z-10 w-full left-0 top-[60px] md:relative md:top-0 md:flex md:w-auto md:space-x-[2rem] lg:space-x-[4rem] xl:space-x-[5rem] duration-500 ease-in-out`}
      >
        <li
          onClick={() => {
            setMenu("shop");
            setIsMenuOpen(false);
          }}
          className="nav_list_items mt-2 md:mt-0"
        >
          <Link style={{ textDecoration: "none", color: "Black" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-8" />
          ) : null}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
            setIsMenuOpen(false);
          }}
          className="nav_list_items my-2 md:my-0"
        >
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to="/mens"
          >
            Men
          </Link>{" "}
          {menu === "Men" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-7" />
          ) : null}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
            setIsMenuOpen(false);
          }}
          className="nav_list_items my-2 md:my-0"
        >
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to="/womens"
          >
            Women
          </Link>{" "}
          {menu === "Women" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-12" />
          ) : null}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
            setIsMenuOpen(false);
          }}
          className="nav_list_items my-2 md:my-0"
        >
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to="/kids"
          >
            Kids
          </Link>{" "}
          {menu === "Kids" ? (
            <hr className="border-t-4 border-[#5EEAD4] rounded-lg w-7" />
          ) : null}
        </li>
      </ul>
      <div className="nav_buttons flex space-x-1 md:space-x-4 ">
        <button
          className="login"
          onClick={() => setMenu("Login")}
        >
          <Link
            className="bg-[#5EEAD4] p-1 px-4 rounded-lg"
            style={{ textDecoration: "none", color: "black" }}
            to="/login"
          >
            <button className="navbar_login_button lg:text-sm"> Login</button>
          </Link>
        </button>
        <Link style={{ textDecoration: "none" }} to={"/cart"}>
          <img className="w-8" src={trolly} alt="Cart" />
          <div className="cart-count bg-red-600 pt-1 w-[16px] h-[16px] flex justify-center items-center mt-[-36px] ml-[28px] rounded-full text-[14px] text-white">
            {getTotalCartItems()}
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/profile"}>
          <img className="w-9" src={profile_logo} alt="Profile" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;