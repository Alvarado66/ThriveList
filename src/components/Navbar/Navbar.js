import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdSpa } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  // A hook to define 'click' with initial value of false
  const [click, setClick] = useState(false);

  // This will handle the click similar to a toggle
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar logo">
            Thriver
            <MdSpa className="navbar-icon" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* if the hamburger menu is clicked the icons change */}
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
