const shuffleDeck = deck => {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const orderedDeck = () => {
  let suits = [ '♥', '♣', '♠', '♦' ];
  let values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  let deck = [];
  
  for (suit of suits) {
    for (value of values) {
      deck.push(value + suit);
    }
  }

  return deck;
};