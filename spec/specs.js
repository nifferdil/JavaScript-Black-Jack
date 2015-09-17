describe('deal', function(){
  it("creates a card with a value between 1 and 52", function(){
    expect(card1.valueOf() <= 52).to.equal(true);
  });
})

// describe('score', function(){
//   it("adds the value of two cards", function(){
//     expect(card1.valueOf() + card2.valueOf()).toBe();
//   });
// });

// describe('createDeck', function(){
//   it("creates 52 card deck in array", function(){
//     expect(createDeck(2)).to.equal();
//   });
// });
