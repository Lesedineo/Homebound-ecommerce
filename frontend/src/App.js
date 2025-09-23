import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/curtains"
            element={<ShopCategory category="curtains" />}
          />
          <Route
            path="/couches"
            element={<ShopCategory category="couches" />}
          />
          <Route
            path="/bedding"
            element={<ShopCategory category="bedding" />}
          />
          <Route
            path="/ornaments"
            element={<ShopCategory category="ornaments" />}
          />
          <Route path="/lamps" element={<ShopCategory category="lamps" />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
