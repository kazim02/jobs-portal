import React from "react";
import Navbar from "../components/Navbar";
import FindJob from "./FindJob";
import JobCard from "../components/JobCard";
import FeatureJob from "./FeatureJob";
import Compnies from "../components/compnies";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-custom-gradient">
        <FindJob />
      </div>
      <FeatureJob/>
      <Compnies/>
      <Footer/>
    </>
  );
};

export default HomePage;
