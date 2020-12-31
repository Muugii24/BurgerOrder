import React from "react";
import Shadow from "../General/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./SideBar.module.css";

const SideBar = (props) => {
  let classes = [css.SideBar, css.Close];
  if (props.showSideBar) {
    classes = [css.SideBar, css.Open];
  }

  return (
    <div>
      <Shadow close={props.toggleSideBar} show={props.showSideBar} />
      <div className={classes.join(" ")}>
        <div className={css.SidebarLogo}>{<Logo />}</div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
