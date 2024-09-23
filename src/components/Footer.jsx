import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "About", link: "" },
    { name: "Contact", link: "" },
    { name: " Admin", link: "" },
  ];

  return (
    <footer className="bg-gradient-to-r from-customWhite via-customPurpleLight  h-auto w-full">
      <div className="p-20">
        <div className="flex ">
          <div className="flex flex-col gap-2 font-bold ">
            <div className="flex items-center gap-2 justify-start">
              <img src="/images/logo/always-apply-logo.svg" alt="" />
              <span className="text-[#6300B3]">AlwaysApply</span>
            </div>

            <div className="flex flex-col mt-2">
              <span className="text-[#5E6670]">
                Call Now:
                <span className="text-[#AE71DB]">+91 9712823336</span>
              </span>
              <span className="text-[#767F8C] mt-3 w-[70%]">
                Gujrat, Ahmedbad 380055, India
              </span>
            </div>
          </div>
          <div className="">
            <span className="text-[#6300B3] text-2xl">Quick link</span>
            <ul className="mt-3">
              {quickLinks.map((items) => {
                return (
                  <li className="text-[#FFFF] hover:text-[#6300B3] cursor-pointer">
                    {items.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className="border-t border-[#767F8C] mt-10" />
        <div className="flex justify-between">
          <span className="text-[#B781DF]">
            @ 2024 AlwaysApply - Job Portal. All rights Reserved
          </span>
          <span className="flex gap-3 items-center">
            <img src="/images/logo/facebook-logo.svg" alt="" />
            <img src="/images/logo/youtube-logo.svg" alt="" />
            <img src="/images/logo/instagram-logo.svg" alt="" />
            <img src="/images/logo/twitter-logo.svg" alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
