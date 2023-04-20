import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Sign Out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="navbar bg-primary">
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-2xl">Auth Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </Link>
        )}

        {user ? (
          <>
            {" "}
            <span>{user.email}</span>{" "}
            <button
              className="ml-2 px-4 py-2 bg-rose-400 rounded-md"
              onClick={handleLogOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button className="ml-2 px-4 py-2 bg-rose-400 rounded-md">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
