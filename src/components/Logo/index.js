import React from "react";
import css from "./Logo.module.css";
import logoImage from "../../assets/img/burger_logo1.png";

const Logo = () => (
  <div className={css.Logo}>
    <img src={logoImage} />
  </div>
);

export default Logo;
