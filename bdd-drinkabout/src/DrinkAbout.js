// https://github.com/juanmaguitar/exercises-katas-js/blob/master/DrinkAbout/README.md
function DrinkAbout() {
}

DrinkAbout.prototype.whatCanIDrink = function(age) {
  var drink = 'drink ';
  switch (true) {
    case age < 14: drink += 'toddy'; break;
    case age < 18: drink += 'coke'; break;
    case age < 21: drink += 'beer'; break;
    //case age >= 21: drink += 'whisky'; break;
    default: drink += 'whisky';
  }
  return drink;
}
