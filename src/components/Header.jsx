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
    <nav className="flex justify-around w-full h-12 align-middle">
      <div className="w-1/5">
        <Link to="/">
          <img src={nitrLogo} alt="NITR Logo" className="w-10" />
        </Link>
      </div>

      {/* <div className="mt-2 cursor-pointer font-semibold" onClick={handleSubmit}>
        <h1>
          Services{" "}
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </h1>
      </div> */}

      {/* <div className="ml-auto w-1/5">
        <ul className="flex ml-auto justify-around gap-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                className="inline-block px-6 py-2 duration-200 hover:bg-amber-300 hover:text-white rounded-full font-semibold "
                onClick={() => navigate(item.slug)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div> */}

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
