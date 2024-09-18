import React from "react";
import Navbar from "../components/Navbar";
import FindJob from "./FindJob";
import JobCard from "../components/JobCard";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-custom-gradient">
        <FindJob />
      </div>
      <JobCard />
    </>
  );
};

export default HomePage;
