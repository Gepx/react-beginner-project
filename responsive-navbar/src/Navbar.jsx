import photoBg from "./assets/photo-bg.jpg";

const Navbar = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${photoBg})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000cc] via-[#1A1A1Aaa] to-[#121212ff]"></div>
      </div>
      <nav className="relative z-10 flex  items-center justify-between px-4 py-2">
        <div className="text-white font-bold text-xl">Logo</div>
        <ul className="flex space-x-4 text-white font-semibold">
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

        <ul className="text-white font-semibold flex space-x-4">
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
