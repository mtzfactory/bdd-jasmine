describe('RockPaperScissors', function() {
  var rockPaperScissors; // nombre de la instancia.
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
  };

  beforeEach(function() {
    rockPaperScissors = new RockPaperScissors();
  });

  it('should win someone... playing TWO players.', function() {
    var player1 = hands[getRandomInt(0, 2)];
    var player2 = hands[getRandomInt(0, 2)];

    var res = rockPaperScissors.play(player1, player2);

    expect(res).toBe(player1 + ' vs ' + player2 + ' => ' + solutions[player1.toLowerCase() + '_' + player2.toLowerCase()] + '!');
  });

  it('should win someone... playing ONE player.', function() {
    var player1 = hands[getRandomInt(0, 2)];

    var res = rockPaperScissors.play(player1);
    var player2 = res.substring(res.indexOf('vs ') + 3, res.indexOf(' =>'));
    // TODO improve with regex.

    expect(res).toBe(player1 + ' vs ' + player2 + ' => ' + solutions[player1.toLowerCase() + '_' + player2.toLowerCase()] + '!');
  });

  it('should throw Error because no player 1 is defined.', function() {
    var func = rockPaperScissors.play;
    
    expect(func).toThrowError('No player 1 is defined!');
  });

});