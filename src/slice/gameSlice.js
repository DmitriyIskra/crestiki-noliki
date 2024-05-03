import {createSlice} from '@reduxjs/toolkit';
import checkWinner from '../js/checkWinner';

// const symbol_x = 'X';
// const symbol_o = 'O';

const startCellsSet = [null, null, null, null, null, null, null, null, null];

const initialState = {
    cells : startCellsSet,
    currentSymbol: 'null',
    isWinner: null,
    symbol_x: 'X',
    symbol_o: 'O',
}

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        start(state) {
            // жребий кто ходит первым
            const num = Math.floor(Math.random() * (3 - 1) + 1);
            const startSymbol = num === 1 ? state.symbol_x : state.symbol_o;
            state.currentSymbol = startSymbol;
        },
        clickCell(state, {payload}) {
            // если есть победитель или ничья блокируем
            if(state.isWinner) return;

            // перерисовываем символы в клетках
            state.cells[payload] = state.currentSymbol;

            // Меняем символ для хода
            state.currentSymbol = state.currentSymbol === state.symbol_x ? (
                state.symbol_o
            ) : 
            (
                state.symbol_x
            );

            // проверяем есть ли победитель
            const isWin = checkWinner([...state.cells]);
            if (isWin) state.isWinner = isWin; // ОТРИСОВАТЬ ПОБЕДИТЕЛЯ

            // проверяем есть ли еще свободные ячейки
            const isFreeSells = state.cells.includes(null);
            if(!isFreeSells && !state.isWinner) {
                state.isWinner = "Ничья";
            }
            
        }, 
        newGame(state) {
            state.cells = startCellsSet;
            // жребий кто ходит первым
            const num = Math.floor(Math.random() * (3 - 1) + 1);
            const startSymbol = num === 1 ? state.symbol_x : state.symbol_o;
            state.currentSymbol = startSymbol;

            state.isWinner = null;
        }
    }
})

export default gameSlice.reducer;
export const { start, clickCell, newGame } = gameSlice.actions;