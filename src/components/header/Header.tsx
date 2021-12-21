import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.headerName}>Dealfinder</div>
        <ul>
          <li><NavLink to="/" className={styles.activeLink}>Home</NavLink></li>
          <li><NavLink to="/list" className={styles.activeLink}>Games</NavLink></li>
        </ul>
    </div>
  );
}
export default Header;