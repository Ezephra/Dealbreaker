import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Game } from "../../types";
import styles from "./AlertGame.module.css"

interface GameProps {
    game: Game
}

const AlertGame = ({game} : GameProps) => {
    const [email, setEmail] = useState("");
    return(
            <div className={styles.overlay}>
              <div className={styles.popup}>
              <form>
                <div>
                    <label>{game.external}</label>
                </div> 
                <div>
                    <label>Any price below: {game.cheapest}&euro;</label>
                </div>
  
                <div>
                    <label>Email address</label>
                    <input type="email"
                        placeholder="name@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <div className={styles.popupButton} onClick={() => SetAlert(email, game.cheapest,game.gameID)} >
                        Submit
                    </div>
                </div>
              </form>
              <Link to={"/games/" + game.gameID}>
                  <div className={styles.close}> &times; </div>
              </Link>
              
              </div>
            </div>

    );
}

const SetAlert = async(email: string, price: any, gameID: any) => {
    try {
        const res = await axios.get(`https://www.cheapshark.com/api/1.0/alerts?action=set&email=${email}&gameID=${gameID}&price=${price}`);
        console.log(res.data);
        if (res.data === true) {
            alert(`The alert has been set on this email : ${email}`);
        } else {
            alert("Please enter a valid email.");
        }
        
    } catch (error) {
        console.log(error);
    }
}

export default AlertGame;