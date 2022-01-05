import React from "react";
import { Link } from "react-router-dom";
import styles from  "./InitialPage.module.css";



const InitialPage = () => {
    return(
        <div className={styles.HomeContainer}>
            <h2>Homepage</h2>
            <div className={styles.HomeWrap}>
                <div className={styles.HomeSection}>
                    <h3>Here you find the recent deals</h3>
                    <Link to="/deals"><button>Deals</button></Link>
                </div>
                <div className={styles.HomeSection}>
                    <h3>Search info about your game</h3>
                    <Link to='/games'><button>Games</button></Link>
                </div>
            </div>
        </div>
    )
}

export default InitialPage