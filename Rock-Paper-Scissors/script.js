
const buttons=document.querySelectorAll('.rpsButton')
let player_score=document.getElementById('player-score')
let hands=document.getElementById('hands')
let result=document.getElementById('result')
let finalscore={'player':0,'computer':0}

function getComputerChoice() {
  const cmptchoice=['Rock','Paper','Scissors']
  const randomNumber=Math.floor(Math.random()*cmptchoice.length)
  const choice=cmptchoice[randomNumber]
  return choice
  
}

function getResult(playerChoice, computerChoice) {
  let score;

  if(playerChoice==computerChoice){
    score=0
  }

  else if(playerChoice=='Rock' && computerChoice=='Scissors'){
    score=1
  }else if(playerChoice=='Paper' && computerChoice=='Rock'){
    score=1
  }else if(playerChoice=='Scissors' && computerChoice=='Paper'){
    score=1
  }else{
    score =-1
  }
  return score
}

function showResult(score, playerChoice, computerChoice) {
  if(score==-1){
    result.innerText='You Lose'

  }else if(score==0){
    result.innerText='Draw'

  }else{
    result.innerText='You Win'

  }
  player_score.innerText=finalscore['player']
  hands.innerText=`👱‍♂️${playerChoice}`+`       🖥️${computerChoice}`

}


function onClickRPS(playerChoice) {
  const computerChoice=getComputerChoice()
  console.log(playerChoice)
  console.log(computerChoice)
  const score=getResult(playerChoice,computerChoice)
  if(score==1){
    finalscore['player']+=1
  }else if(score==-1){
    finalscore['player']-=1
  }else{
    finalscore['player']+=0
  }
  console.log(finalscore['player'])
  showResult(score,playerChoice,computerChoice)
}

function playGame() {
  buttons.forEach(button=>{
    button.onclick=()=>onClickRPS(button.value)
  })

  const end=document.getElementById('endGameButton')
  end.onclick=()=>{endGame()}
}
function endGame() {
  if(player_score.innerText==''&& hands.innerText==''&&result.innerText==''){
    alert('Play The Game First')
  }else{
  player_score.innerText=''
  hands.innerText=''
  result.innerText=''}
}
  

playGame()