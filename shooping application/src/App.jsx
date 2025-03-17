import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./Components/ProductList";
import CartPage from "./Components/Cartpage";
import ContactPage from "./Components/ContactPage"; // Assuming you have a ContactPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />{" "}
        {/* Add route for Contact */}
      </Routes>
    </Router>
  );
}

export default App;
