
/*
First, the 'cards' array is created which represents all the possible choices a
player can choose from. 'cardsInPlay' is an empty array which is used later to determine
that a player has chosen two cards, and then to compare if those two cards are identical.  
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//This function will validate if the player has chosen two cards and if they are matching queens.

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
          } else {
            console.log("Sorry, try again.");
          }
    }
    
}

//flipCard will take the player choices, which are indexed from 'cards' and push them to the 'cardsInPlay' array.
//flipCard will then call the checkForMatch function. 
function flipCard (cardId) {
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped " + cards[cardId]);
    checkForMatch();
    
};

flipCard(0);
flipCard(2);


