// https://github.com/juanmaguitar/exercises-katas-js/blob/master/RockPaperScissors/README.md
function RockPaperScissors() {
}

RockPaperScissors.prototype.play = function(player1, player2) {
  var hands = ["ROCK", "PAPER", "SCISSORS"];
  var solutions = {
    rock_paper: 'PAPER wins',
    rock_rock: 'tie',
    rock_scissors: 'ROCK wins',
    paper_rock: 'PAPER wins',
    paper_paper:  'tie',
    paper_scissors: 'SCISSORS wins',
    scissors_paper: 'SCISSORS wins',
    scissors_scissors: 'tie',
    scissors_rock: 'ROCK wins'
  }

  if (!player1)
    throw new Error('No player 1 is defined!');

  if (!player2) 
    player2 = hands[getRandomInt(0, 2)];
  
  return player1 + ' vs ' + player2 + ' => ' + solutions[player1.toLowerCase() + '_' + player2.toLowerCase()] + '!';
}