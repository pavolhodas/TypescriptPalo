function RockPaperScissors(a:string, b : string){
    if (a == "rock" && b == "paper" || a == "scissors" && b=="rock" || a=="paper" && b=="scissors") {
        console.log("player 2 wins")
    }
    else if(a== "scissors" && b=="paper" || a=="rock" && b=="scissors" || a=="paper" && b=="rock"){
        console.log("player 1 wins")
    }
    else{
        console.log("TIE");
    }
}
RockPaperScissors("rock", "paper");