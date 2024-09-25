import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Function to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navComponents = [
    { name: "Home", link: "/" },
    { name: "Find Jobs", link: "/findjob" },
    { name: "Employers", link: "" },
    { name: "Admin", link: "" },
    { name: "About Us", link: "" },
  ];

  return (
    <div
      className={`fixed w-full bg-white ${
        hasScrolled
          ? "shadow-lg rounded-b-lg" // Add shadow and bottom border-radius when scrolled
          : ""
      } transition-all duration-300`}
    >
      <nav className="w-full h-auto p-5 flex flex-row justify-between items-center mx-auto max-w-[1170px]">
        <div className="flex gap-2 font-bold items-center">
          <img src="/images/logo/always-apply-logo.svg" alt="" />
          <span className="text-[#6300B3]">AlwaysApply</span>
        </div>

        <div className="hidden md:flex flex-row items-center gap-4">
          {navComponents.map((items, index) => (
            <Link key={index} to={items.link}>
              <span className="text-sm cursor-pointer hover:text-[#6300B3]">
                {items.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact-us"
            className="rounded-md border border-[#6300B3] p-1 px-3"
          >
            <span className="text-[#6300B3]">Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#6300B3] p-2"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 w-64 bg-white shadow-lg h-full z-50 transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            className="absolute top-4 right-4 text-[#6300B3]"
            onClick={() => setIsDrawerOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col p-6">
            {navComponents.map((items, index) => (
              <Link
                key={index}
                to={items.link}
                className="py-2 text-lg hover:text-[#6300B3]"
              >
                {items.name}
              </Link>
            ))}
            <Link
              to="/contact-us"
              className="mt-4 rounded-md border border-[#6300B3] p-2 text-center text-[#6300B3]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
