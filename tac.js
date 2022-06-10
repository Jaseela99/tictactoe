window.addEventListener("DOMContentLoaded",()=>{
    //queryselectorall returns an array like objects to convert it in to proper array we use Array.from()
    const squares = Array.from(document.querySelectorAll(".square"))
    //display player
    const player = document.querySelector(".display-player")
    //reset game
    const resetButton = document.querySelector("#reset")
    //to announce the winner
    const result = document.querySelector(".result")

    //board with 9 empty values
    let board = ['','','','','','','','','']
    let currentPlayer ="X"//x or o
    let isGameOn =true; //game is on

    //end game
    const PLAYERX_WON ="PLAYERX_WON"
    const PLAYERO_WON ="PLAYERO_WON"
    const TIE = "TIE"

    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

        //game will win
        const winningConditions =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        function handleResultValidation() {
            //game won
            let roundWon = false;
            //looping through winning conditions
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                const a = board[winCondition[0]];
                const b = board[winCondition[1]];
                const c = board[winCondition[2]];
                //if any of squares in the board has empty strings then loop continues
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                //if a b and c are equal then game is won loop is broke
                if (a === b && b === c) {
                    roundWon = true;
                    break;
                }
            }
           //if game won and current player is X then type will be PLAYERX_WON and game will be inactive
            if (roundWon) {
                announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
                isGameOn = false;
                return;
            }
        //if  board doesnt have any empty strings type become tie
        if (!board.includes(''))
            announce(TIE);
        }
    //result winner is displayed else tie 
        const announce = (type) => {
            switch(type){
                case PLAYERO_WON:
                    result.innerHTML = 'Player <span class="playerO">O</span> Won';
                    break;
                case PLAYERX_WON:
                    result.innerHTML = 'Player <span class="playerX">X</span> Won';
                    break;
                case TIE:
                    result.innerText = 'Tie';
            }
            //removes hide class name from result clss hence it becomes visible
            result.classList.remove('hide');
        };
       //to decide whethre the square has x or o
        const isValidAction = (square) => {
            //if square has x or O returns false else true
            if (square.innerText === 'X' || square.innerText === 'O'){
                return false;
            }
            return true;
        };
       //board[index] is relaced with current players letter
        const updateBoard =  (index) => {
            board[index] = currentPlayer;
        }
      //player changing alternatively
        const changePlayer = () => {
            //removes the current player classname 
            player.classList.remove(`player${currentPlayer}`); //x
            //if current player is x replaced by o
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';//o
            //also the player
            player.innerText = currentPlayer; //"o"
            //classname of playerO is added
            player.classList.add(`player${currentPlayer}`); //playerO
        }
    
        const userAction = (square, index) => {
            //if the board has empty spaces and game is on then 
            if(isValidAction(square) && isGameOn) {
                //square is changed from "" to currentplayer
                square.innerText = currentPlayer;
                //player letter clssname is added to the square
                square.classList.add(`player${currentPlayer}`);
                //board is updated
                updateBoard(index);
                //checks the winning condition 
                handleResultValidation();
                //changes the player
                changePlayer();
            }
        }
        //board and game is active 
        const resetBoard = () => {
            board = ['', '', '', '', '', '', '', '', ''];
            isGameOn = true;
            //hide is added to result
            result.classList.add('hide');
    //initial player is given to x
            if (currentPlayer === 'O') {
                changePlayer();
            }
            squares.forEach(square => {
                //each square is given as empty string 
                square.innerText = '';
                //player classname is removed from each square
                square.classList.remove('playerX');
                square.classList.remove('playerO');
            });
        }
       //for each click on the square player letter is given for the particular index
        squares.forEach( (square, index) => {
            square.addEventListener('click', () => userAction(square, index));
        });
//resetboard executes when reseyt button is clicked
    resetButton.addEventListener("click",resetBoard)
})












