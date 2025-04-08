import { Link, Outlet, useLocation } from "react-router-dom";
import techImg from "../src/assets/tech.png";
import { useEffect, useState } from "react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signup") {
      setActiveTab("signup");
    } else {
      setActiveTab("login");
    }
  }, [location]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen min-w-screen bg-gray-300">
        <div className="w-[720px] h-[480px] bg-gray-200 rounded-[12px] shadow-[0_0_35px_rgba(0,0,0,0.20)] flex flex-row items-start">
          {/* Left Content */}
          <div className="w-[50%] h-full rounded-l-[12px] flex items-center justify-center">
            <div className="flex flex-col items-center h-[420px] w-3/4 ">
              <div className="flex flex-row items-center justify-around p-3 w-full">
                <Link
                  to={"/"}
                  className={`relative cursor-pointer text-xs font-bold hover:text-gray-900 ${
                    activeTab === "login" ? "text-gray-900" : "text-gray-600"
                  } ubuntu-font`}
                  onClick={() => setActiveTab("login")}>
                  Login
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[15px] h-[2px] rounded-full transition-all ease-in-out duration-300 ${
                      activeTab === "login" ? "bg-blue-800 " : "bg-transparent"
                    }`}></span>
                </Link>
                <Link
                  to={"/signup"}
                  className={`relative cursor-pointer text-xs font-bold hover:text-gray-900 ${
                    activeTab === "signup" ? "text-gray-900" : "text-gray-600"
                  } ubuntu-font`}
                  onClick={() => setActiveTab("signup")}>
                  Signup
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[15px] h-[2px] rounded-full transition-all ease-in-out duration-300 ${
                      activeTab === "signup" ? "bg-blue-800" : "bg-transparent"
                    }`}></span>
                </Link>
              </div>
              <div className=" w-full h-full mt-4">
                <Outlet />
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-[50%] h-full bg-gradient-to-br  from-[#090979] to-[#00D4FF]  rounded-r-[12px] flex items-center justify-center">
            <div className="w-3/4 h-[420px] rounded-md bg-white/10 backdrop-blur-lg  border border-white/20 shadow-lg flex items-center justify-center ">
              <img
                src={techImg}
                alt="Tech Images"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
