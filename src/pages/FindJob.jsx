import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FindJob = () => {
  const [jobName, setJobName] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {

    navigate(`/job-seeker?name=${jobName}&location=${jobLocation}`);
  };

  return (
    <div className="mx-auto h-auto max-w-[1170px] p-5">

      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        {/* Text Section */}
        <div className="lg:w-[60%] w-full mb-6 lg:mb-0 lg:text-left text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Find a job that aligns with your interests and skills
          </h1>
          <span className="text-lg lg:text-xl text-gray-600">
            Thousands of jobs in all the leading sectors are waiting for you.
          </span>

          {/* Job Search Form */}
          <div className="flex bg-white p-2 flex-col sm:flex-row rounded-lg w-full space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <div className="flex items-center space-x-2">
              <img
                src="/images/icons/search.svg"
                alt=""
                className="inline-block"
              />
              <input
                type="text"
                value={jobName}
                onChange={(e) => setJobName(e.target.value)}
                placeholder="Job Name"
                className="p-2 border-none outline-none rounded-md w-full"
              />
            </div>
            <span className="mx-2 text-gray-400 hidden sm:inline">|</span>

            <div className="flex items-center space-x-2">
              <img
                src="/images/icons/location.png"
                alt=""
                className="inline-block"
              />
              <input
                type="text"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                placeholder="Job Location"
                className="p-2 border-none outline-none rounded-md w-full"
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#6300B3] text-white px-6 py-2 rounded-md mt-4 sm:mt-0"
            >
              Find Job
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[40%] w-full lg:text-left text-center">
          <img
            src="/images/find-job-person.png"
            alt="Person searching for jobs"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FindJob;
