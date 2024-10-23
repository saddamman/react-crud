import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div className="errorLayout flex items-center justify-center h-screen w-screen">
      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center w-10/12 mx-5">
        <div className=" text-red-950 text-6xl font-bold italic">404</div>
        <h2 className="">Some Thing Wrong!!</h2>
        <Link to="/">
          <Button className="pt-1 pb-2 mt-3">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorLayout;
