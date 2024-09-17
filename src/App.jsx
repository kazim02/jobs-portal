import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
  
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contact-us" element={<ContactUs />} />


      </Routes>
    </BrowserRouter>

  );
};

export default App;
