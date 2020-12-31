import React from "react";
import css from "./HanburgerMenu.module.css";

const HanburgerMenu = (props) => (
  <div onClick={props.toggleSideBar} className={css.HanburgerMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default HanburgerMenu;
