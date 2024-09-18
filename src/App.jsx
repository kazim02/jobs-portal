import React from "react";
import './global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./components/ContactUs";
import JobSeeker from "./pages/JobSeeker";
import { JobProvider } from "./context/JobContext";

const App = () => {
  return (
    <JobProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/job-seeker" element={<JobSeeker />} />
        </Routes>
      </BrowserRouter>
    </JobProvider>
  );
};

export default App;
