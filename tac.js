//div for player 
const playerDiv = document.querySelector(".player")
const restartDiv = document.querySelector(".restart")
//each squares is manipulated by squareDiv
const squareDivs = document.querySelector(".square")

//players

const firstPlayer ="X"
const secondPlayer ="O"

//booleans for game
let isGame = true
let isXNext =true
//determines who plays the game
const whoPlays =(play)=> play==="X" ? firstPlayer:secondPlayer


//who wins
const winGame =(play)=>{
    //game is not played
    isGame=false
    //player who win is displayed
    playerDiv.innerHTML = `<span>${whoPlays(play)}  won...</span>`

}

//gameStatus

const gameStatus =()=>{
    const square1 = squareDivs[0].classList[1];
    const square2 = squareDivs[1].classList[1];
    const square3 = squareDivs[2].classList[1];
    const square4 = squareDivs[3].classList[1];            // defines each square 
    const square5 = squareDivs[4].classList[1];
    const square6 = squareDivs[5].classList[1];
    const square7 = squareDivs[6].classList[1];
    const square8 = squareDivs[7].classList[1];
    const square9 = squareDivs[8].classList[1];

//checks in columns

if(square1 && square1 === square2 && square1===square3){
    winGame(square1)
    squareDivs[0].classList.add("won")
    squareDivs[1].classList.add("won")
    squareDivs[2].classList.add("won")
}else if(square4 && square4 === square5 && square4 === square6 ){
    winGame(square3)
    squareDivs[3].classList.add("won")
    squareDivs[4].classList.add("won")
    squareDivs[5].classList.add("won")
}else if(square7 && square7 === square8 && square7 === square9 ){
    winGame(square7)
    squareDivs[6].classList.add("won")
    squareDivs[7].classList.add("won")
    squareDivs[8].classList.add("won")
}
//check in rows
else if(square1  && square1 === square4 && square1 === square7 ){
    winGame(square1)
    squareDivs[0].classList.add("won")
    squareDivs[3].classList.add("won")
    squareDivs[6].classList.add("won")
}
else if(square2  && square2 === square5 && square2 === square8 ){
    winGame(square2)
    squareDivs[1].classList.add("won")
    squareDivs[4].classList.add("won")
    squareDivs[7].classList.add("won")
}
else if(square3  && square3 === square6 && square3 === square9 ){
    winGame(square3)
    squareDivs[2].classList.add("won")
    squareDivs[5].classList.add("won")
    squareDivs[8].classList.add("won")
}
//diagonals
else if(square1 && square1===square5 && square1===square9){   // checks diagonally
    GameWin(square1);
    squareDivs[0].classList.add('won');
    squareDivs[4].classList.add('won');
    squareDivs[8].classList.add('won');

}else if(square3 && square3===square5 && square3===square7){    // chekcks diagonally
    GameWin(square3);   
    squareDivs[2].classList.add('won');
    squareDivs[4].classList.add('won');
    squareDivs[6].classList.add('won');

}
//tie

else if (square1 && square2 && square3 && square4 && square5 && square6 && square7 && square8 && square9){
    isGame = false
    playerDiv.innerHTML ="It's a Tie"
}else{
    //alternatively change the player turn
    isXNext=!isXNext
    //determining whose turn it is
    isXNext ? playerDiv.innerHTML = `${firstPlayer}'s turn`: playerDiv.innerHTML =`${secondPlayer}'s turn`
}

const restartCheck =()=>{
    //for next game x should start
    isXNext=true
    playerDiv.innerHTML =`${firstPlayer}'s turn`
    //to remove x and o s from squares 
    for(const squareDiv of squareDivs){
        squareDiv.classList.remove("X")
        squareDiv.classList.remove("O")
        squareDiv.classList.remove("won")
    }
    //game is on
    isGame = true
}

//to add x and o in game box
const squareClick =(e)=>{
    const classList = e.target.classList

    if(!isGame || classList[1]==='X' || classList[1]==='O'){
        return;
    }
    if(xIsNext){
        classList.add('X');
        GameStatus();
    }else{
        classList.add('O');
        GameStatus();
    }
}
//event listeners for restart and squareclick

restartDiv.addEventListener("click",restartCheck) 

for(const squareDiv of squareDivs){
    squareDiv.addEventListener("click",squareClick)
}


}

