import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import curtain_banner from "./Components/Assests/curtain_banners.png";
import couch_banner from "./Components/Assests/couches_banner.png";
import bedding_banner from "./Components/Assests/bedding_banner.png";
import ornament_banner from "./Components/Assests/ornaments_banner.png";
import lamp_banner from "./Components/Assests/lamps_banner.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/curtains"
            element={
              <ShopCategory banner={curtain_banner} category="curtains" />
            }
          />
          <Route
            path="/couches"
            element={<ShopCategory banner={couch_banner} category="couches" />}
          />
          <Route
            path="/bedding"
            element={
              <ShopCategory banner={bedding_banner} category="bedding" />
            }
          />
          <Route
            path="/ornaments"
            element={
              <ShopCategory banner={ornament_banner} category="ornaments" />
            }
          />
          <Route
            path="/lamps"
            element={<ShopCategory banner={lamp_banner} category="lamps" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
