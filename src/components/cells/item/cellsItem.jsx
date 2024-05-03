import { clickCell } from "../../../slice/gameSlice"
import { useDispatch } from "react-redux"

export default function CellsItem({item, index}) {
  const dispatch = useDispatch();
  return (
    <li 
        onClick={() => dispatch(clickCell(index))}
        className={`cell-item ${item ? `symbol${item} cell-item_active` : ''}`}
    > 
    {item && item}
    </li>
  )
}
