import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../containers/container";
import NavbarList from "./navbar.list";
import NavbarToggle from "./navbar.toggle";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const menuState = () => {
    setActive(!active);
  };
  return (
    <Container>
      <nav className="navbar">
        <div className="flex justify-between w-full md md:w-32 items-center">
          <Link to="/" className="logo w-16 animate">
            <img
              src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
              alt="Main Logo"
            />
          </Link>
          <NavbarToggle active={active} menuState={menuState} />
        </div>
        <div className={`${active ? "flex" : "hidden"} md:flex`}>
          <NavbarList />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
