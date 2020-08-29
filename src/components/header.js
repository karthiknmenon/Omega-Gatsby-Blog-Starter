import React from "react";
import {Link } from "gatsby";

function Header() {
  return (
    <div className="flex justify-between bg-gray-200 p-6 font-bold">
      <Link to="/">
          KM
      </Link>
      <Link to="/about">
          About
      </Link>
    </div>
  );
}

export default Header;
