import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { UserContext } from "../App";

function Navbar() {
  const {state,dispatch} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  const RenderMenu = () =>{
    if(state){
      return (
        <>
          <nav className="navbar">
            <Link to="/" className="logo">
              Suray Vansi
            </Link>
            <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
            <button className="nav-toggle" onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </nav>
        </>
      );
    }else{
      return (
        <>
          <nav className="navbar">
            <Link to="/" className="logo">
              Suray Vansi
            </Link>
            <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              
            </ul>
            <button className="nav-toggle" onClick={toggleNavbar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </nav>
        </>
      );
    }

  }

  return (
    <>
    <RenderMenu/>
    </>
  );
}

export default Navbar;
