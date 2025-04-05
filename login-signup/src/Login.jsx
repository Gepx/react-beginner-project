const Login = () => {
  return (
    <>
      <form className="flex flex-col ubuntu-font">
        <div className="flex flex-col mb-4 ">
          <label htmlFor="email" className="text-sm font-bold mb-1 ">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address..."
            className="bg-white border-2 border-gray-300 rounded-md p-2 text-xs focus:outline-none focus:border-blue-500  focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col mb-1 relative">
          <label htmlFor="password" className="text-sm font-bold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            className="bg-white border-2 border-gray-300 rounded-md p-2 text-xs focus:outline-none focus:border-blue-500  focus:ring-blue-500"
            required
          />

          <div className="absolute right-3 top-8.5 w-4 h-4 text-gray-500 cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full">
              <path
                d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-3 h-3"
            />
            <label
              htmlFor="checkbox"
              className="text-[10px] text-gray-700 cursor-pointer">
              Remember me
            </label>
          </div>

          <p className="text-[10px] text-gray-800 cursor-pointer">
            Forgot Password?
          </p>
        </div>

        <button
          type="submit"
          className="w-full h-[30px] text-xs bg-blue-500 text-white rounded-sm py-1 mt-4 cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out">
          Login
        </button>
      </form>

      <div className="flex items-center justify-center my-4 ubuntu-font">
        <hr className="flex-1 border-gray-200" />
        <span className="px-2 text-gray-500 text-xs font-semibold">OR</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      <div className="flex flex-col gap-2 ubuntu-font">
        <button className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-2 text-xs hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
            className="w-4 h-4"
          />
          <span className="text-gray-700">Login with Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-2 text-xs hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer">
          <img
            src="https://img.icons8.com/?size=100&id=95294&format=png&color=000000"
            alt="Apple Logo"
            className="w-4 h-4"
          />
          <span className="text-gray-700">Login with Apple</span>
        </button>
        <button className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-2 text-xs hover:bg-gray-100 transition duration-200 ease-in-out cursor-pointer">
          <img
            src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
            alt="Facebook Logo"
            className="w-4 h-4"
          />
          <span className="text-gray-700">Login with Facebook</span>
        </button>
      </div>
    </>
  );
};

export default Login;
