let currentPlayer='X';
const cells=document.querySelectorAll('.cell');

function makeMove(cell) {
if(!cell.textContent) {
    cell.textContent=currentPlayer;
    cell.classList.add(currentPlayer);
    currentPlayer=currentPlayer==='X'? '0' : 'X';

}
}


function checkWin(player) {
const winCombinations=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

for(const combination of winCombinations) {
    const[row,column,diagonal]=combination;
    if(cells[row].classList.contains(player)&&
    cells[column].classList.contains(player)&&
    cells[diagonal].classList.contains(player)) {
        return true;
    }
}
return false;
}








function resetMain() {
    cells.forEach(cell => {
        cell.textContent='';
        cell.classList.remove('X','0');
    });
    currentPlayer='X';
}