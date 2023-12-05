import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const isActive = (path) => {
    return location.pathname === `/${path}` ? "text-[#539165]" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight * 0.5; // 30% of the window height
      //   console.log(scrollPosition);
      //   console.log(windowHeight);
      if (scrollPosition < windowHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isSticky ? "sticky top-0 z-50" : ""}>
      <div className="flex flex-row justify-between p-4 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link
            to="/"
            className=" font-semibold text-2xl p-1 cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            Urja <span className="text-[#539165]">Connect</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            duration={500}
            className={`hover:text-[#539165] transition-all cursor-pointer ${isActive(
              ""
            )}`}
          >
            Home
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"/about"}
            spy={true}
            smooth={true}
            duration={500}
            className={`hover:text-[#539165] transition-all cursor-pointer ${isActive(
              "about"
            )}`}
          >
            About
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"/service"}
            spy={true}
            smooth={true}
            duration={500}
            className={`hover:text-[#539165] transition-all cursor-pointer ${isActive(
              "service"
            )}`}
          >
            Services
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={"/tutors"}
            spy={true}
            smooth={true}
            duration={500}
            className={`hover:text-[#539165] transition-all cursor-pointer ${isActive(
              "tutors"
            )}`}
          >
            Teachers
          </Link>
          <Link
            to={"/contact"}
            spy={true}
            smooth={true}
            duration={500}
            className={`hover:text-[#539165] transition-all cursor-pointer ${isActive(
              "contact"
            )}`}
          >
            Contact
          </Link>
          <Link to={"/login"}>
            <button class=" py-1 px-4 rounded-full outline transition-all hover:bg-[#539165] hover:text-white hover:shadow-md">
              Login
            </button>
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#539165] text-white left-0 top-20 font-medium text-2xl 
        text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-20`}
      >
        <Link
          to={"/"}
          duration={500}
          className="hover:text-[#539165] hover:bg-white transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          duration={500}
          className="hover:text-[#539165] hover:bg-white transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to={"/services"}
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] hover:bg-white transition-all cursor-pointer"
        >
          Services
        </Link>

        <Link
          to={"/contact"}
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] hover:bg-white transition-all cursor-pointer"
        >
          Contact
        </Link>
        <Link to={"/login"}>
          <button className="py-1 px-4 rounded-full outline transition-all hover:bg-[#539165] hover:text-white hover:shadow-md">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
