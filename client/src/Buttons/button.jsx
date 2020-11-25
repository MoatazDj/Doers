import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Button = ({ isButton = true, title = "", action, href, moreStyle }) => {
  const style = `font-bold rounded-md px-3 py-2 text-base cursor-pointer animate focus:outline-none ${moreStyle}`;

  return (
    <Fragment>
      {isButton ? (
        <Button className={style}>{title}</Button>
      ) : (
        <Link to={href} className={style}>
          {title}
        </Link>
      )}
    </Fragment>
  );
};

export default Button;
