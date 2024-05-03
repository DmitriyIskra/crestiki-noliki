export default function checkWinner (arr) {

    const v = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    let hasWin = null;
    let checkX;
    let checkO;

    v.forEach(item => {
        checkX = item.every( item => arr[item] === 'X');
        checkO = item.every( item => arr[item] === 'O');
        if(checkX) hasWin = arr.find(item => item ==='X'); // вернет то что
        if(checkO) hasWin = arr.find(item => item === 'O'); // соответствует true
    })

    return hasWin ? hasWin : null;
}