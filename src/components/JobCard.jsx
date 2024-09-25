import React from "react";

const JobCard = ({ job }) => {
  return (
    <div
      key={job.id}
      className="p-4 bg-[#EFE2F8] rounded-md mt-5 w-full h-auto"
    >
      <div className="flex justify-between">
        <h2 className="text-2xl">{job.title}</h2>
        <img src="/images/icons/location.png" alt="location-icon" />
      </div>
      <div className="flex gap-3">
        <p>{job.job_type}</p>
        <span>Salary: {job.salary ? job.salary : "Not Disclosed"}</span>
      </div>
      <div className="flex items-center gap-4">
        <img
          className="w-20 h-auto"
          src={
            job.company_logo_url
              ? job.company_logo
              : "/images/logo/fake-logo.svg"
          }
          alt={job.company_name}
          onError={(e) => {
            e.target.src = "/images/default-logo.png";
          }} 
        />
        <div>
          <span>{job.company_name}</span>
          <div className="flex gap-1">
            <img src="/images/icons/location.png" alt="location" />
            <span>{job.candidate_required_location}</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Job Details
        </a>
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
