import { useState } from "react";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);

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
            autoComplete="email"
            required
          />
        </div>

        <div className="flex flex-col mb-1 relative">
          <label htmlFor="password" className="text-sm font-bold mb-1">
            Password
          </label>
          <input
            type={togglePassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password..."
            className="bg-white border-2 border-gray-300 rounded-md p-2 text-xs focus:outline-none focus:border-blue-500  focus:ring-blue-500"
            required
          />

          <div
            className="absolute right-3 top-8.5 w-4 h-4 text-gray-500 cursor-pointer"
            onClick={() => setTogglePassword(!togglePassword)}>
            {togglePassword ? (
              <svg
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    clip-rule="evenodd"
                    d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z"
                    fill="#000000"
                    fill-rule="evenodd"></path>
                  <path
                    d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z"
                    fill="#000000"></path>
                </g>
              </svg>
            ) : (
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
            )}
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
        <hr className="flex-1 border-gray-900" />
        <span className="px-2 text-gray-500 text-xs font-semibold">OR</span>
        <hr className="flex-1 border-gray-900" />
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
