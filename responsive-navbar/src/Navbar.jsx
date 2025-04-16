import { useState } from "react";
import photoBg from "./assets/photo-bg.jpg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${photoBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000cc] via-[#1A1A1Aaa] to-[#121212ff]"></div>
      </div>
      <nav className="relative z-10 flex  items-center justify-between px-4 py-2 h-[50px]">
        <div className="text-white font-bold text-xl">Logo</div>
        <ul className="hidden sm:flex space-x-4 text-white font-semibold">
          <li>
            <a href="#about" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#services" className="relative group">
              Services
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative group">
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <ul className="hidden sm:flex text-white font-semibold space-x-4">
          <li>
            <a href="#login" className="relative group">
              Login
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#signup" className="relative group">
              Signup
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="sm:hidden flex flex-col items-end justify-center gap-[5px] cursor-pointer group">
          {openMenu ? (
            <>
              <span className="bg-white rounded w-5 h-[2px] rotate-45 translate-y-[3px] transition-all duration-300 ease-in-out"></span>
              <span className="bg-white rounded w-5 h-[2px] -rotate-45 -translate-y-[3px] transition-all duration-300 ease-in-out"></span>
            </>
          ) : (
            <>
              <span className="bg-white rounded w-4 h-[2px] transition-all duration-300 ease-in-out"></span>
              <span className="bg-white rounded w-2 h-[2px] group-hover:w-4 transition-all duration-300 ease-in-out"></span>
              <span className="bg-white rounded w-3 h-[2px] group-hover:w-4 transition-all duration-300 ease-in-out"></span>
            </>
          )}
        </button>

        {openMenu && (
          <div className="absolute top-[50px] left-0 w-full h-[25vh] bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-4 text-white font-semibold text-base sm:hidden transition-all duration-300 ease-in-out">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#login">Login</a>
            <a href="#signup">Signup</a>
          </div>
        )}
      </nav>

      <section className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to the Studio
        </h1>
        <p className="text-lg md:text-2xl">
          High-end production gear, tested and ready
        </p>
      </section>
    </div>
  );
};

export default Navbar;
