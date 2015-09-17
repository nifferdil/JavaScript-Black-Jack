var createCard = function (faceValue, suit) {
  var suits = ["of Clubs", "of Hearts", "of Diamonds", "of Spades"];
  var faceValues = [2, 3, 4, 5, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    var card = [];
    card.push(faceValues, suit);
    return card;
};

var createDeck = function() {
  debugger;
  var suits = ["of Clubs", "of Hearts", "of Diamonds", "of Spades"];
  var faceValues = [2, 3, 4, 5, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  var deck = [];
  for (i = 0; i < suits.length; i++) {
        for (j = 0; j < faceValues.length; j++) {
            var deck = faceValues.length*i+j
        }
        deck[faceValues.length*i+j] = createCard(faceValues[j], suits[i]);
    }

  // var deck = suits.concat(faceValues);// var deck = suits.push.apply(suits, faceValues);
  // var deck = suits.concat(faceValues);
    return deck;
};

// $(document).ready(function() {
//   $("form#dealCards").submit(function(event) {
//     //var numberInput = $("input#number_input").val();
//     //var result = howLarge(numberInput);
//
//     //$(".answer").text(result);
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
