import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { GameItem } from "../../components";
import { Game } from "../../types";
import styles from  "./Gamepage.module.css";


const Gamepage = () => {
    
    const [query, setQuery] = useState("");
    const [gameData, setGameData] = useState<Game[]>([]);
    const loadQuery = async() => {
        try {
            const res = await axios.get<Game[]>('https://www.cheapshark.com/api/1.0/games?title=' + query);
            setGameData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadQuery();
    },[query]);
    return(
    <div className={styles.searchPage}>
        <h3>Search:</h3>
      <input className={styles.search} placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
      
      <div>
        
        { gameData.filter(game => {
            if (query === '') {
                return <div>Enter a game name</div>;
            } else if (game.external.toLowerCase().includes(query.toLowerCase())) {
                return game;
            }
            }).map((game, index) => (
                <>
                
                <div className={styles.resultCard} key={index}>
                    <Link to={"/games/" + game.gameID}><p className={styles.gameTitle}>{game.external}</p></Link>
                    <Switch>
                        <Route path={"/games/" + game.gameID}>
                            <GameItem game={game} />
                        </Route>
                    </Switch>
                </div>
                </>
            ))
        }
      </div>
    
    </div>
    )
}

export default Gamepage