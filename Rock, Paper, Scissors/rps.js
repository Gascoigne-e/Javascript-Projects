const choices = ["rock","paper","scissors"]
const winners = []

function game(){
    for(let i=1;i<=5;i++){
        playround(i);    }
        document.querySelector('button').textContent = 'Play new game'
    logewins()
    
}

function playround(round){
    const playerselection = playerchoice();
    const computerselection = computerchoice();
    const winner = checkwinner(playerselection, computerselection);
    winners.push(winner) 
    loground(playerselection, computerselection, winner, round)
}

function playerchoice(){
let input = prompt('type rock, paper, scissors');
while(input == null)
{
    input = prompt('type rock, paper, scissors')
}
input= input.toLowerCase();
let check = validateinput(input)
while (check == false)
{
    input = prompt("incorrect spelling. type rock, paper, scissors")
    while(input == null)
{
    input = prompt('type rock, paper, scissors')
}
input= input.toLowerCase();
check = validateinput(input)
}

return input
}

function computerchoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}


function validateinput(choice){
    return choices.includes(choice)
}
function checkwinner(choicep, choicec){
if (choicep === choicec){
    return 'tie'
}
else if((choicep === 'rock' && choicec== 'scissors') ||
 (choicep === 'paper' && choicec== 'rock') ||
  (choicep === 'scissors' && choicec== 'paper')){
    return 'player'

}
else
    return 'computer'
}

function logewins(){
    let playerwins =  winners.filter((item) => item == "player").length
    let computerwins = winners.filter((item) => item == "computer").length
    let ties = winners.filter((item) => item == "tie").length
    console.log("results:");
    console.log("playerscore:", playerwins)
    console.log("computerscore:", computerwins)
    console.log("ties:", ties)
}

function loground(playerchoice, computerchoice, winner, round){
    console.log("Round:", round)
console.log("Playerchoice:", playerchoice)
console.log("computerchoice:", computerchoice)
console.log(winner, "won the round")
console.log("-------------------------------------------------")
}
