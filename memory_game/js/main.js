
/*
First, the 'cards' array is created which represents all the possible choices a
player can choose from. 'cardsInPlay' is an empty array which is used later to determine
that a player has chosen two cards, and then to compare if those two cards are identical.  
*/

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

//This function will validate if the player has chosen two cards and if they are matching queens.

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
          } else {
            alert("Sorry, try again.");
          }
    }
    
}

//flipCard will take the player choices, which are indexed from 'cards' and push them to the 'cardsInPlay' array.
//flipCard will then call the checkForMatch function. 
function flipCard (cardId) {
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
    
};

flipCard(0);
flipCard(2);


