import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logopng from "../../src/assets/freepik-gradient-sunrise-travel-agency-logo-20250303125922qPbn.png";
import userIcon from "../../src/assets/user.png";
import { AuthContext } from "./Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "   font-semibold text-lg  bg-white text-green-400 mr-2"
            : "mr-2  bg-transparent r font-semibold text-lg"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/all_visa"}
        className={({ isActive }) =>
          isActive
            ? "   font-semibold text-lg  bg-white text-green-400 mr-2"
            : "mr-2  bg-transparent r font-semibold text-lg"
        }
      >
        All Visa
      </NavLink>
      <NavLink
        to={"/add_visa"}
        className={({ isActive }) =>
          isActive
            ? "   font-semibold text-lg  bg-white text-green-400 mr-2"
            : "mr-2  bg-transparent r font-semibold text-lg"
        }
      >
        Add Visa
      </NavLink>
      <NavLink
        to={`/all-visa/user/${user?.displayName}`}
        className={({ isActive }) =>
          isActive
            ? "   font-semibold text-lg  bg-white text-green-400 mr-2"
            : "mr-2  bg-transparent r font-semibold text-lg"
        }
      >
        My Added Visa
      </NavLink>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="w-25" src={logopng} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && user.photoURL ? (
            <img
              className="w-10 rounded-full mr-2"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <img className="mr-2" src={userIcon} alt="" />
          )}

          {user && user.email ? (
            <button onClick={logOut} to={"/login"} className="btn">
              Log Out
            </button>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
