import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icons/books-stack-of-three 2.svg";
import Icone from "../../assets/icons/Group.svg";
import navBarStyle from "./navbar.module.css";

const NavBar = () => {
  const [menuOpenn, setMenuOpenn] = useState(false);
  const [isActive, setActive] = useState([false, false, false]);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 480);

  const handleSearch = () => {
    setMenuOpenn(!menuOpenn);
    console.log("clicked"); // Toggle the menuOpen state
  };

  useEffect(() => {
    // Check the window width and set the isResponsive state when the component mounts
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={navBarStyle.navContainer}>
      <nav className={navBarStyle.navBar}>
        <div className={navBarStyle.logoContainer}>
          <Link to="/">
            <img
              className={navBarStyle.navImg}
              src={isResponsive ? Icone : Icon}
              alt="logo"
            />
          </Link>
          <h1 className={navBarStyle.navTitle}>Sapiens</h1>
        </div>
        <div
          className={navBarStyle.navMenu}
          onClick={handleSearch} // Use handleClick function here
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`${navBarStyle.navUl} ${
            menuOpenn ? navBarStyle.open : ""
          }`}
        >
          <li>
            <NavLink
              onClick={() => {
                setActive([true, false, false]);
              }}
              // activeClassName={navBarStyle.active}
              className={`${navBarStyle.navLi} ${
                isActive[0] ? navBarStyle.active : ""
              }`}
              to={"./"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActive([false, true, false]);
              }}
              // activeClassName={navBarStyle.active}
              className={`${navBarStyle.navLi} ${
                isActive[1] ? navBarStyle.active : ""
              }`}
              to={"./AllBooks"}
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setActive([false, false, true]);
              }}
              // activeClassName={navBarStyle.active}
              className={`${navBarStyle.navLi} ${
                isActive[2] ? navBarStyle.active : ""
              }`}
              to={"./AllAuthors"}
            >
              All Authors
            </NavLink>
          </li>
        </ul>
        <button className={navBarStyle.loginBtnNav}> Log In</button>
      </nav>
    </div>
  );
};

export default NavBar;
