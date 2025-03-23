import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link
        to="/normal"
        className="cursor-pointer border-2 p-4  mx-2 rounded-2xl">
        Normal DigiClock
      </Link>
      <Link to="/led" className="cursor-pointer border-2 p-4  mx-2 rounded-2xl">
        LED DigiClock
      </Link>
    </div>
  );
};

export default App;
