import React, { useContext } from "react";
import { JobContext } from "../context/JobProvider";
import JobCard from "../components/JobCard";

const FeatureJob = () => {
  const { jobsData, error, loading, callApi } = useContext(JobContext);

  //   if(loading) return <Loader/>
  if (error) return <p>{error}</p>;
  React.useEffect(() => {
    callApi();
  }, []);
  
  return (
    <div className="container-max flex justify-center flex-col mt-20">
      <div className="flex items-center justify-center flex-col">
        <span className="text-5xl font-semibold">Featured Jobs</span>
        <span className="text-2xl text-[#5E6670] mt-3">
          Choose jobs from the top employers and apply for the same.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {jobsData.slice(0, 3).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <button className="text-2xl ">View all</button>
    </div>
  );
};

export default FeatureJob;
