import { useSelector } from "react-redux";
import CellsItem from "../item/cellsItem";

export default function Cells() {
    const {cells} = useSelector(store => store.game)
    return (
        <ul className='wrapper-cells'>
            {
              cells && cells.map((item, index) => {
                return(
                  <CellsItem key={index} item={item} index={index} />
                )
              })
            }
        </ul>
    )
}