import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Games, Game } from '../../types';
import GameList from './GameList';


const GamePage = ({route} : any) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Game[]>([]);
  const fullURL = process.env.API_URL+ route.params.parmKey;

  const LoadGames = async() => {
    try {
      setLoading(true);
      const response = await axios.get<Game[]>(fullURL)
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } 
  }
  useEffect(() => {
    LoadGames();
  }, []);

  return (
    <div>
        <GameList games={data}/>
    </div>
  );

}



export default GamePage;
