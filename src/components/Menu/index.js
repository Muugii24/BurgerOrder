import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem link="/burger-page">БҮРГЕР ЗАХИАЛАХ</MenuItem>
      <MenuItem link="/burger-orders">ЗАХИАЛГУУД</MenuItem>
      <MenuItem link="/signUp">БҮРТГҮҮЛЭХ</MenuItem>
      <MenuItem link="/login">НЭВТРЭХ</MenuItem>
    </ul>
  </div>
);
export default Menu;
