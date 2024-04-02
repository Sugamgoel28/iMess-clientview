import { useNavigate, Link } from "react-router-dom";
import nitrLogo from "./nitrlogo.png";
import DateandTime from "./DateandTime";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  const navItems = [
    {
      name: "User Profile",
      slug: "/user-profile",
    },
    {
      name: "Attendance",
      slug: "/attendance",
    },
    {
      name: "Mess Menu",
      slug: "/mess-menu",
    },
    {
      name: "Notifications",
      slug: "/notifications",
    },
  ];

  const handleSubmit = () => {};

  return (
    <nav className="flex justify-around w-full h-12 my-auto">
      <div className="w-2/5 flex">
        <Link to="/">
          <img src={nitrLogo} alt="NITR Logo" className="w-10" />
        </Link>
        <div className="p-1 my-auto">
          <h1 className="font-semibold">
            National Institute of Technology, Rourkela
          </h1>
        </div>
      </div>

      <div className="w-2/5 text-right mt-3 md:block hidden">
        <DateandTime />
      </div>

      <div className="w-1/12 flex justify-between mt-2">
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
              className="inline-block w-8 h-8 rounded-full ring-2 ring-white hover:ring-blue-400 transition duration-300 ease-in-out cursor-pointer"
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
