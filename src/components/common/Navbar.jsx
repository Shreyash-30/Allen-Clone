import logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { to: "courses", label: "Classroom courses" },
    { to: "online-courses", label: "Online courses" },
    { to: "test-series", label: "Test series" },
    { to: "results", label: "Results" },
    { to: "admission", label: "Admission" },
  ];
  return (
    <>
      <nav className="  bg-white shadow sticky top-0  z-50">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between  mx-auto px-2 py-2 ">
          <Link to="/" className="flex items-center ">
            <img src={logo} className="mr-2 h-24  " alt="Logo" />
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 "
            >
              Login
            </Link>
          </div>

          <div className=" hidden justify-between items-center w-full lg:flex lg:w-auto ">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((link) => mapNavLink(link.to, link.label))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function mapNavLink(to, label) {
  return (
    <>
      <li className="none">
        <NavLink
          to={to}
          className="text-md font-semibold  text-gray-700 hover:text-blue-500   mx-4"
        >
          <p>{label}</p>
        </NavLink>
      </li>
    </>
  );
}
