import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Game } from "../../types";
import styles from "./GameItem.module.css";
import AlertGame from "../alert/AlertGame";

interface GameProps {
    game: Game
}


const GameItem = ({game} : GameProps) => {
    return(
        <div>
        <div className={styles.gameItem}>
            <p>{game.gameID}</p>
            <p>{game.external}</p>
            <p>{game.cheapest}&euro;</p>
            <img src={game.thumb} alt="main game img" />
            
        </div>
        <Link to={"/games/" + game.gameID + "/alert"}><div className={styles.popupButton}>When is the deal?</div></Link>
        <Switch>
            <Route path={"/games/" + game.gameID + "/alert"}>
                <AlertGame game={game} />
            </Route>
        </Switch>
        </div>

    )
}

export default GameItem