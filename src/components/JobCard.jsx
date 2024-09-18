import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";
import Loader from "./Loader";

const JobCard = () => {
  const { jobsData, error, loading, callApi } = useContext(JobContext);

//   if(loading) return <Loader/>
  if (error) return <p>{error}</p>;
  React.useEffect(() => {
    callApi();
  }, []);

  console.log("jobsData", jobsData);
    {/* {jobsData.slice(0, 3).map((item) => {
        return <div key={item.id} className="">
            <span className="">{item.id}</span>
        </div>
      })} */}
  return (
    <div className="container-max">
     test


    </div>
  );
};

export default JobCard;
