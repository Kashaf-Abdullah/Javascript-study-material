//rock,paper, scissor

let playGame=confirm("shall we play rock,paper and scissor")
if(playGame){
    //play
    let playChoice=prompt("please enter rock, paper or scissor ")

if(playChoice){
 let playerOne=playChoice.trim().toLowerCase();
 if(playerOne==='rock' ||playerOne==='paper'||playerOne==='scissor'){

    let computerchoice=Math.floor(Math.random()*3+1);

    let computer= computerchoice===1?"rock"
    :computerchoice===2?"paper" 
    :"scissor";


    let result=
    playerOne===computer
    ?"Tie game!"
    :playerOne==="rock" && computer==="paper"
    ?`playerOne: ${playerOne}\nComputer:${computer}
    \nComputer wins!!!`
    :playerOne==="paper" && computer==="scissor"
    ?`playerOne: ${playerOne}\nComputer:${computer}
    \nComputer wins!!!`
    :playerOne==="scissor" && computer==="rock"
    ?`playerOne: ${playerOne}\nComputer:${computer}
    \nComputer wins!!!`
    
    :`playerOne: ${playerOne}\nComputer:${computer}
    \nplayerone wins!!!`;
    alert(result);
 
let playAgain=confirm("Play Again??");
playAgain?location.reload():alert("Ok!! thanks for playing")

}
 else{
    alert('you didn\'t enter rock,paper and scissor')
 }

}
else{
    alert('i guess you changed your mind')
}
}
else{
    alert('ok!!, maybe next time')
}