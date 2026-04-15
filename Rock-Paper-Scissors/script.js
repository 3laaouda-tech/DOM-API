const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
const playButton = document.getElementById('play-button');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

let userScore = 0;
let computerScore = 0;
let userChoice = null;

const choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(user, computer) {
  if (user === computer) return 'tie';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'user';
  }
  return 'computer';
};

function updateResult(user, computer, winner) {
  let message = `You chose ${user}, Computer chose ${computer}. `;
  if (winner === 'tie') {
    message += 'It\'s a tie!';
  } else if (winner === 'user') {
    message += 'You win!';
    userScore++;
  } else {
    message += 'Computer wins!';
    computerScore++;
  }
  resultEl.textContent = message;
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
};

function clearSelection() {
  [rockBtn, paperBtn, scissorsBtn].forEach(btn => {
    btn.classList.remove('ring-2', 'ring-yellow-400');
  });
  userChoice = null;
};

function selectChoice(choice) {
  clearSelection();
  userChoice = choice;
  const btn = document.getElementById(choice);
  btn.classList.add('ring-2', 'ring-yellow-400');
};

rockBtn.addEventListener('click', () => selectChoice('rock'));
paperBtn.addEventListener('click', () => selectChoice('paper'));
scissorsBtn.addEventListener('click', () => selectChoice('scissors'));

playButton.addEventListener('click', () => {
  if (!userChoice) {
    alert('Please select Rock, Paper, or Scissors!');
    return;
  }

  const computerChoice = getRandomChoice();
  const winner = determineWinner(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, winner);
  clearSelection();
});