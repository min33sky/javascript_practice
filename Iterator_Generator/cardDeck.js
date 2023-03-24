//? custom iterables
// 카드 덱 출력하기
const cartDeck = {
  suits: ['♥', '♠', '♣', '♦'],
  court: ['J', 'Q', 'K', 'A'],
  [Symbol.iterator]: function* () {
    for (const suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + ' ' + i;
      for (let c of this.court) yield suit + ' ' + c;
    }
  },
};

const deck = [...cartDeck];
console.log(deck);
