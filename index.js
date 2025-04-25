let userScore=0;
let computerScore=0;

const choices = document.querySelectorAll('.choice');// console.log(choices);//we can see three nodelists
const msg = document.querySelector('#msg');// console.log(msg);//we can see the message element
const user_score = document.querySelector('#user-score');
const computer_score = document.querySelector('#computer-score');


//Generating computer choice
const genCompChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);//0,1,2
  const computerChoice = options[randomNumber];
  return computerChoice;
}

//Draw game
const drawGame = () => {
  msg.innerText = 'Game was Draw,Play again!';
  msg.style.backgroundColor = 'black';
}

//Show winner
const showWinner = (userWin,userChoice,computerChoice) => {
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
    msg.innerText = `You win, your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computer_score.innerText = computerScore;
    msg.innerText = `you lose, ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

//Play game
const playGame = (userChoice) => {
  // console.log('User choice:', userChoice);
  //computer choice
  const computerChoice = genCompChoice();
  // console.log('Computer choice:', computerChoice);

  if (userChoice === computerChoice) {
    drawGame();//if user and computer choice are same
  } else {
    userWin = true;
    if (userChoice === 'rock') {
      computerChoice === 'paper' ? userWin = false : true;
    } else if (userChoice === 'paper') {
      computerChoice === 'scissors' ? userWin = false : true;
    } else {
      computerChoice === 'rock' ? userWin = false : true;
    }
    showWinner(userWin,userChoice,computerChoice);
  }
}

//Adding event listeners to each choice
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    // console.log(userChoice);//we can see the id of the clicked element
    // console.log('User clicked:', choice);
    playGame(userChoice);
  });
});
