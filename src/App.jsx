import React from "react";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./components/ContactUs";
import JobSeeker from "./pages/JobSeeker";
import Register from "./components/Register";
import { JobProvider } from "./context/JobProvider";
import { UserProvider } from "./context/UserProvider";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <UserProvider>
      <JobProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/job-seeker" element={<JobSeeker />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />

          </Routes>
        </BrowserRouter>
      </JobProvider>
    </UserProvider>
  );
};

export default App;
