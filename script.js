// Acessing the required tag inorder to change them using javascript 
let boxes = document.querySelectorAll(".box");
let turn = document.querySelector(".turn-first");
let winnerShow = document.querySelector(".winner-displayer-container");
let actualWinner = document.querySelector(".winner-displayer");
let newbtn = document.querySelector(".new-btn");
let restartbtn = document.querySelector(".restart-btn");

let moveCount = 0;
let playerO = true;
// All win conditions of the game 
let winConditions = [
    [0,1,2],[3,4,5],[6,7,8], //Horizontal Win
    [0,3,6],[1,4,7],[2,5,8], //Vertical Win
    [0,4,8],[2,4,6]          //Diagonal Win
]


//A function which shows who the winner is
let showWinner = (winner) =>{
    actualWinner.innerText = winner + " WIN'S";
    winnerShow.classList.remove("hide");
    for(box of boxes){
        box.disabled = true;
    }
}

//A function which shows draw condition
let showDraw = () =>{
    actualWinner.innerText = "DRAW!";
    winnerShow.classList.remove("hide");
    moveCount = 0;
}

//A function which checks who won the game
let checkWinner = () =>{
    for(patterns of winConditions){
        val1 = boxes[patterns[0]].innerText;   
        val2 = boxes[patterns[1]].innerText;
        val3 = boxes[patterns[2]].innerText; 

        if (val1 && val2 && val3){
            if(val1 === val2 && val2 === val3){
                console.log(val1, "is the winner of this game.");
                showWinner(val1);
                return;
            }
        }
    }

    if(moveCount === 9){
        showDraw();
    }
}

//Toggle button for turn by turn system
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        moveCount++;
        if(playerO){
            playerO = false;
            box.innerText = "O";
            turn.innerText = "X" + " Turn";
        }
        else{
            playerO = true;
            box.innerText = "X";
            turn.innerText = "O" + " Turn";
        }
        box.disabled = true;
        checkWinner();
    })
})


//Restart function
let restart = () =>{
    winnerShow.classList.add("hide");
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    moveCount = 0;
}

// For New Game 
newbtn.addEventListener("click",restart);

// For Restarting the game 
restartbtn.addEventListener("click",restart);
    
