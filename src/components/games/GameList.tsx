import React from "react";
import ListItem from "./GameItem";
import { Game, Games } from "../../types";
import styles from "./GameList.module.css";


const GameList = ({games}: Games) => {
    return(
      <div className={styles.gamesList}>{games.map((game: Game)=> {
        return <ListItem game = {game}/> 
      })}
      </div>
    );
}

export default GameList;