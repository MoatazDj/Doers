import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../containers/container";
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
            <img src={require("../assets/esta.png")} alt="Main Logo" />
          </Link>
          <NavbarToggle active={active} menuState={menuState} />
        </div>
        <div className={`${active ? "flex" : "hidden"} md:flex`}></div>
      </nav>
    </Container>
  );
};

export default Navbar;
