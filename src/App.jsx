import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignUp from "./Components/Pages/LoginSignUp";
import Profile from "./Components/Pages/Profile";
import Footer from "./Components/Footer/Footer";
import menmain from "./Components/assets/men ca-1,28,26/MEN_Main_category_5_1296x.jpg"
import womenmain from "./Components/assets/women/bg_slideshow_h1_1_1296x.jpg"
import kidsm from "./Components/assets/kids/KidsCollection_CategoryImage_1296x.jpg"

function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes basename="/glamgait">
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={menmain} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={womenmain} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kidsm} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>

        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
