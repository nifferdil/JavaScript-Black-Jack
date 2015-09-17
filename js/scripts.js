var deal = function() {
  var card = Math.floor((Math.random() * 52) + 1);
  return card;
}

var card1 = deal();
var card2 = deal();

var score = function() {
  var sum = card1 + card2;
  return sum;
}

var getValue = function(card) {
  if (card % 13 > 10 ||card % 13 === 0 )
    return card = 10;
    else if (card % 13 === 1)
      return card = 11;
    else
      return card % 13;
  }

var score = function() {
  return getValue(card1) + getValue(card2);
};

console.log("You have cards " + card1 + " and " + card2 +
" for a score of " + score());
