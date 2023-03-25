import React from "react";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <header className="py-5 flex flex-row space-x-10 items-center">
      <div>
        <strong className="text-md font-extrabold">ILHAM</strong>
      </div>
      <div className="text-xs">
        <NavItem />
      </div>
    </header>
  );
}

export default Navbar;
