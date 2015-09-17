describe('createCard', function(){
  it("creates a card with a face value and a suit", function(){
    expect(createCard()).to.equal("2 of Clubs");
  });
})

// describe('createDeck', function(){
//   it("creates 52 card deck in array", function(){
//     expect(createDeck()).to.equal(52);
//   });
// });

// describe('createDeck', function(){
//   it("creates 52 card deck in array", function(){
//     expect(createDeck(2)).to.equal();
//   });
// });
