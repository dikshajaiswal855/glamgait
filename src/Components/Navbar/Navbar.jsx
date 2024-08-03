import React, { useState, useContext } from "react";
import logo from "../assets/logo.jpg";
import profile_logo from "../assets/profile_icon.jpg";
import trolly from "../assets/trolley.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="nav_main flex justify-between px-14 font-bold  py-4">
      <div className="nav_logo_name w-10">
        <img src={logo} alt="" />
      </div>
      {/* <div className="nav_details flex flex-row "> */}
        {/* <div className="nav_main_headings "> */}
          <ul className="pt-2 ml-[9rem] flex justify-between space-x-[6rem] ">
            <li
              onClick={() => {
                setMenu("shop");
              }}
              className="nav_list_items "
            >
              <Link style={{ textDecoration: "none", color: "Black" }} to="/">
                Shop
              </Link>{" "}
              {menu === "shop" ? (
                <hr className="border-t-4 border-[#5EEAD4] rounded-lg" />
              ) : (
                <></>
              )}
            </li>
            <li
              onClick={() => {
                setMenu("Men");
              }}
              className="nav_list_items"
            >
              <Link
                style={{ textDecoration: "none", color: "Black" }}
                to="/mens"
              >
                Men
              </Link>{" "}
              {menu === "Men" ? (
                <hr className="border-t-4 border-[#5EEAD4] rounded-lg" />
              ) : (
                <></>
              )}
            </li>
            <li
              onClick={() => {
                setMenu("Women");
              }}
              className="nav_list_items"
            >
              <Link
                style={{ textDecoration: "none", color: "Black" }}
                to="/womens"
              >
                Women
              </Link>{" "}
              {menu === "Women" ? (
                <hr className="border-t-4 border-[#5EEAD4] rounded-lg" />
              ) : (
                <></>
              )}
            </li>
            <li
              onClick={() => {
                setMenu("Kids");
              }}
              className="nav_list_items"
            >
              <Link
                style={{ textDecoration: "none", color: "Black" }}
                to="/kids"
              >
                Kids
              </Link>{" "}
              {menu === "Kids" ? (
                <hr className="border-t-4 border-[#5EEAD4] rounded-lg" />
              ) : (
                <></>
              )}
            </li>
          </ul>
        {/* </div> */}
      {/* </div> */}
      <div className="nav_buttons flex justify-between space-x-8">
        <button
          className="login "
          onClick={() => {
            setMenu("Login");
          }}
        >
          <Link
            className="bg-[#5EEAD4] p-1 px-4 rounded-lg"
            style={{ textDecoration: "none", color: "black" }}
            to="/login"
          >
            <button className="navbar_login_button"> Login</button>
          </Link>
          {menu === "Login" ? <></> : <></>}
        </button>
        <Link style={{ textDecoration: "none" }} to={"/cart"}>
          <img className="w-10 pt-1" src={trolly} alt="" />
          <div className="cart-count bg-red-600 pt-1 w-[18px] h-[18px] flex justify-center items-center mt-[-45px] ml-[40px] rounded-full text-[16px]  text-white">
            {getTotalCartItems()}
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/profile"}>
          <img className="w-10" src={profile_logo} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
