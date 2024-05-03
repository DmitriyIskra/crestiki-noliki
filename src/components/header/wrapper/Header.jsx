import NextStep from "../nextStep/NextStep";
import TextWinner from "../text/TextWinner";
import { useSelector } from "react-redux";

export default function Header() {
  const { isWinner, currentSymbol } = useSelector(store => store.game);

  return (
    <header>

        <TextWinner isWinner={isWinner} />

        <NextStep isWinner={isWinner} currentSymbol={currentSymbol} />

    </header>
  )
}
