import { useDispatch } from "react-redux";
import { newGame } from "../../../slice/gameSlice";

export default function ButtonNewGame() {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(newGame());
  }
  return (
    <button 
        className='button-new-game'
        onClick={handler}
    >
        New Game
    </button>
  )
}
