import React from "react";

const Compnies = () => {
  const brands = [
    {
      images: "/images/compnies/google.svg",
    },
    {
      images: "/images/compnies/microsoft.svg",
    },
    {
      images: "/images/compnies/flipkart.svg",
    },
    {
      images: "/images/compnies/youtube.svg",
    },
    {
      images: "/images/compnies/ibm.svg",
    },
  ];
  return (
    <div className="container-max ">
      <div className="flex justify-center">
        <span className="text-2xl text-[#ACB2B9]">Top companies hiring now</span>
      </div>
      <div className="flex justify-between items-center">
        {brands.map((items) => {
          return <img src={items.images} alt="Companies" />;
        })}
      </div>
    </div>
  );
};

export default Compnies;
