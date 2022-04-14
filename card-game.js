class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }
  
    reset(){
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
  
      while(m){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
    }
    deal(){
        return this.deck.pop();
      }
  }
  
  const deck1 = new Deck();
  console.log(deck1.deck);

  const deckList = deck1.deck;

var found = false;
let count = 0;
// for (var i = 0; i < deckList.length && !found; i++) {
//   if (deckList[i].toLowerCase() === "ace") {
//     found = true;
//     count++;
//     break;
//   }
// }

// var myarr = ["I", "like", "turtles"];
var arraycontainsturtles = (deckList.indexOf("Ace of Clubs") > -1);

// console.log(found);
console.log(arraycontainsturtles);
console.log(deckList.length);


//   deck1.reset();
//   console.log(deck1.deck);
//   deck1.shuffle();
//   console.log(deck1.deck);
//   deck1.deal();
//   console.log(deck1.deck);
//   deck1.hitMe();
//   console.log(deck1.deck)