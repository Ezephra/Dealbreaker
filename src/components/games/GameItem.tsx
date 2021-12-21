import React from "react";
import { Game } from "../../types";
import styles from "./GameList.module.css";
import {Link} from "react-router-dom";

interface GameItemProps {
    game : Game
}

const GameItem = ({ game }: GameItemProps) => {
    return (
      <Link to={`/detail/${game.gameID}`}>
        <div key={game.gameID} className={styles.gameCard}>
          <div>{game.external}</div>
          <div>{game.cheapest} &euro;</div>
          <div><img src={game.thumb}/></div>
        </div>
      </Link>
    )
  }

export default GameItem;