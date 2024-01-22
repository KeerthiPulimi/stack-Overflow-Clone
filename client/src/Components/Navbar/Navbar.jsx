

import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import "./Navbar.css";

import bars from "../../assets/bars-solid.svg";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar"
const Navbar = () => {




  var User = 1
  

  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" >
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                D


              </Avatar>
              <button className="nav-item nav-links" >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
