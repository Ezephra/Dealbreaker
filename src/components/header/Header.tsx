import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvider";
import styles from "./Header.module.css";


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <>
            <h1 className={styles.title} data-item='Dealbreaker'>Dealbreaker</h1>
            <nav>
                <ul className={styles.menuItems}>
                <li><NavLink to="/" data-item="Home" className={styles.menuItem}>Home</NavLink></li>
                <li><NavLink to="/deals" data-item="Deals" className={styles.menuItem}>Deals</NavLink></li>
                <li><NavLink to="/games" data-item="Games" className={styles.menuItem}>Games</NavLink></li>
                <li><NavLink to="/contact-me" data-item="Contact Me" className={styles.menuItem}>Contact Me</NavLink></li>
                <li>
                    <div className={theme === 'light' ? styles.dark : styles.light} onClick={toggleTheme}>
                        Switch to {theme === 'light' ? 'dark' : 'light'} mode
                    </div>
                </li>
                </ul>
            </nav>
        </>
    )
}

export default Header