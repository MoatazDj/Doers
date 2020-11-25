import React from "react";
import { Link } from "react-router-dom";
import Container from "../containers/container";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        <div className="flex justify-between w-full md md:w-32 items-center">
          <Link to="/" className="logo w-16 animte">
            <img src={require("../assets/esta.png")} alt="Main Logo" />
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
