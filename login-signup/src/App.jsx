import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Link
          to="/signup"
          className="cursor-pointer border-2 p-4 mx-2 rounded-2xl">
          Signup
        </Link>
        <Link
          to="/login"
          className="cursor-pointer border-2 p-4 mx-2 rounded-2xl">
          Login
        </Link>
      </div>
    </>
  );
};

export default App;
