import { useParams } from 'react-router-dom';
import { Game } from '../../types';
import styles from './DetailPage.module.css';
interface ParamTypes {
  id: string
}

interface DetailPageProps {
  games: Game[]
}

const GameDetailPage = ({games} : DetailPageProps) => {
  let { id } = useParams<ParamTypes>();

  let game = games.find((game: Game) => game.gameID == id);

  return (
    <div>
      <div>{game?.external}</div>
      <div>{game?.cheapest}</div>
      <div>{game?.cheapestDealID}</div>
    </div>
  )
}

export default GameDetailPage;