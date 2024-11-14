import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar w-full h-[60px] bg-black text-white list-none flex gap-4 justify-center items-center text-xl">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/test">Test it now</Link>
      </li>
    </div>
  );
}

export default Navbar;
