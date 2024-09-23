import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";
import JobCard from "../components/JobCard";

const FeatureJob = () => {
  const { jobsData, error, loading, callApi } = useContext(JobContext);

  //   if(loading) return <Loader/>
  if (error) return <p>{error}</p>;
  React.useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="container-max flex justify-center flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobsData.slice(0, 3).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <button className="text-2xl ">View all</button>
    </div>
  );
};

export default FeatureJob;
