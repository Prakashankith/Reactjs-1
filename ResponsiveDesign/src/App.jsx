import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./Components/Banner";
import Clients from "./Components/Clients";
import Services from "./Components/Services";
import Choosers from "./Components/Choosers";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BackupandRecover from "./Solutions/BackupandRecover";
import ERP from "./Solutions/ERP";
import Helpdesk from "./Solutions/Helpdesk";
function App() {
  return (
    <>
      <Router>
        <Navbar />;
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/Solutions/BackupandRecover"
            element={<BackupandRecover />}
          />
          <Route path="/Solutions/ERP" element={<ERP />} />
          <Route path="/Solutions/Helpdesk" element={<Helpdesk />} />
        </Routes>
      </Router>
      {/* <Banner /> */}
      <Clients />
      <Services />
      <Choosers />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
