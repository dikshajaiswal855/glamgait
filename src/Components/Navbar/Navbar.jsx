import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import profile_logo from "../assets/profile_icon.jpg";
import trolly from "../assets/trolley.png"
// import "./Navbar.css";
import { Link } from "react-router-dom";
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, ShoppingBagIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Shop', href: '/', current: true },
//   { name: 'Men', href: '/mens', current: false },
//   { name: 'Women', href: '/womens', current: false },
//   { name: 'Kids', href: '/kids', current: false },
// ]


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                 <img className="h-10 w-auto object-contain rounded-md" src={logo} alt="" />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <ShoppingBagIcon className="h-6 w-6 mr-2" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">Open user menu</span>
//                       <img className="h-10 w-auto object-contain rounded-full" src={profile_logo} alt="" />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }

function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="nav_main flex justify-between px-6 font-bold   py-4">
      <div className="nav_logo_name w-10">
        <img src={logo} alt="" />
      </div>
      <div className="nav_details flex flex-row ">
        <div className="nav_main_headings ">
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
              {menu === "shop" ? < hr className="border-t-4 border-[#5EEAD4] rounded-lg" /> : <></>}
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
              {menu === "Men" ? <hr className="border-t-4 border-[#5EEAD4] rounded-lg" /> : <></>}
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
              {menu === "Women" ? <hr className="border-t-4 border-[#5EEAD4] rounded-lg" /> : <></>}
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
              {menu === "Kids" ? <hr className="border-t-4 border-[#5EEAD4] rounded-lg" /> : <></>}
            </li>
          </ul>
        </div>
      </div>
      <div className="nav_buttons flex justify-between space-x-8">
        <button
          className="login "
          onClick={() => {
            setMenu("Login");
          }}
        >
          <Link className="bg-[#5EEAD4] p-1 px-4 rounded-lg" style={{ textDecoration: "none", color: "black" }} to="/login">
            <button className="navbar_login_button"> Login</button>
          </Link>
          {menu === "Login" ? <></> : <></>}
        </button>
        <Link style={{ textDecoration: "none" }} to={"/cart"}>
          <img className="w-10 pt-1" src={trolly} alt="" />
          <div className="cart-count bg-red-600 pt-1 w-[18px] h-[18px] flex justify-center items-center mt-[-45px] ml-[40px] rounded-full text-[16px]  text-white">0</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/profile"}>
          <img className="w-10" src={profile_logo} alt="" />
        </Link>
      </div>
    </div>
   
  );
}

export default Navbar;
