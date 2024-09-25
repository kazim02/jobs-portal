import React, { useState, createContext } from "react";
import axios from "axios";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://remotive.com/api/remote-jobs";

  const callApi = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API);
      setJobsData(response.data.jobs);
      setLoading(false);
    } catch (error) {
      setError("Error fetching jobs");
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider value={{ jobsData, loading, error, callApi }}>
      {children}
    </JobContext.Provider>
  );
};
