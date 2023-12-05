import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import images from "./images";

import { FaBars, FaPhone } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[url('/landing_image.jpg')] bg-no-repeat lg:bg-cover">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
          <div className="w-full sticky top-0 flex justify-between lg:w-auto lg:static lg:justify-start h-[10vh] items-center">
            <a
              onClick={() => navigate("/")}
              className="font-medium tracking-wider transition-colors cursor-pointer"
            >
              <img src='/logo.png' alt="logo" className="w-20" />
            </a>

            <div className="flex items-center">
              <div className="lg:hidden"></div>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 h-[3rem] block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <AiOutlineClose /> : <FaBars />}
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:h-auto h-screen justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
              <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Trips</NavLink>
              </li>
              <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Recomended island</NavLink>
              </li>
              <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Transport</NavLink>
              </li>
              <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Boat Charter</NavLink>
              </li>
              <li className=" py-2 flex text-white uppercase font-medium items-center leading-snug hover:text-[#5badbb]">
                <NavLink to="/">Boat Time table</NavLink>
              </li>

              <li className=" py-2 flex text-white items-center leading-snug">
                <button className="bg-[#6fcfdd] rounded-full px-4 py-1 hoverBtn flex items-center gap-2">
                  <FaPhone className="rotate-90" />
                  <p>+66 82 519 2688</p>
                </button>
              </li>
              <li className=" py-2 flex gap-x-1 cursor-pointer text-white items-center leading-snug text-xs">
                <img
                  src="/uk_flag.png"
                  alt="uk flag"
                  className="rounded-full w-5 h-5"
                />{" "}
                EN
              </li>
            </ul>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </nav>
    </>
  );
}
