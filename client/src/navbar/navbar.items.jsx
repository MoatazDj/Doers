import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ href, listStyle, name }) => {
  return (
    <li
      className={`hover:text-primart animate px-3 py-2 cursor-pointer rounded-md${listStyle}`}
    >
      <Link to={href}>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
