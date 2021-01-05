import React from "react";
import css from "./MenuItem.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => (
  <div className={css.MenuItem}>
    <li>
      <NavLink
        onClick={props.close}
        activeClassName={css.active}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  </div>
);

export default MenuItem;
