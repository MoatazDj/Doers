import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ link, listStyle, name }) => {
  console.log(listStyle);
  return (
    <li
      className={`hover:text-primart animate px-3 py-2 cursor-pointer rounded-md ${listStyle}`}
    >
      <Link exact to={link}>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
