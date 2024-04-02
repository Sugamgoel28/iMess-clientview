import { Link } from "react-router-dom";
import nitrLogo from "./nitrlogo.png";
import DateandTime from "./DateandTime";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

function Header() {
  return (
    <nav className="flex justify-around w-full h-12 align-middle">
      <div className="flex flex-row w-2/5 flex-nowrap">
        <Link to="/">
          <img src={nitrLogo} alt="NITR Logo" className="w-10" />
        </Link>
        <div className="p-1 my-auto">
          <h1 className="font-semibold">
            National Institute of Technology, Rourkela
          </h1>
        </div>
      </div>

      <div className="hidden w-2/5 mt-3 text-right md:block">
        <DateandTime />
      </div>

      <div className="flex justify-between w-1/12 mt-2">
        <div>
          <Link to="/notifications">
            <NotificationsActiveOutlinedIcon
              fontSize="medium"
              className="mr-3 hover:text-blue-400"
            />
          </Link>
        </div>

        <div>
          <Link to="/user-profile">
            <img
              className="inline-block w-8 h-8 transition duration-300 ease-in-out rounded-full cursor-pointer ring-2 ring-white hover:ring-blue-400"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
