<<<<<<< HEAD
import Card from "./card.js";

class Deck {
  constructor() {
    this.cards = this.createDeck();
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      // Use i+1 to include index 0
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  dealCard() {
    return this.cards.pop();
  }

  createDeck() {
    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const ranks = [
      { name: "1", value: 11 }, // Ace
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 },
      { name: "9", value: 9 },
      { name: "10", value: 10 },
      { name: "11", value: 10 }, // Jack
      { name: "12", value: 10 }, // Queen
      { name: "13", value: 10 }, // King
    ];

    const deck = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        let card = new Card(rank.name, rank.value, `./cards_img/${suit} ${rank.name}.png`);
        deck.push(card);
      }
    }
    return deck;
  }
=======
import Card from './card.js';

class Deck {
  constructor(jsonFile) {
    this.cards = [];
    // Load cards from JSON file if provided
    if (jsonFile) {
      this.loadCardsFromJSON(jsonFile);
    }
  }

  loadCardsFromJSON(jsonFile) {
    fetch(jsonFile)
      .then((response) => response.json())
      .then((json) => this.importFromJSON(json))
      .catch((error) => console.error('Error loading deck:', error));
  }

  importFromJSON(json) {
    this.cards = json.map((card) => new Card(
      card.value, 
      card.suit,
      card.rank,
      `./cards_img/${card.file}`,   
      ""            
    ));
  }

  drawCard() {
    return this.cards.pop();
  }


  shuffle() {
    function seededRandom(seed) {
      this._seed = seed % 2147483647;
      if (this._seed <= 0) this._seed += 2147483646;

      this.next = function() {
        this._seed = (this._seed * 16807) % 2147483647;
        return (this._seed - 1) / 2147483646;
      };
    }

    const seed = Date.now();
    const myRandom = new seededRandom(seed);

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(myRandom.next() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  
>>>>>>> f5deb57 (draft)
}

export default Deck;
