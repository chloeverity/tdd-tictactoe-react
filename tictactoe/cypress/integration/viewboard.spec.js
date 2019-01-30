describe('Next player:', () => {
  it('Displays who the next player is', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Next player: X")
  });
});
describe('Viewing the board', () => {
  it('Displays the grid', () => {
    cy.visit('http://localhost:3000')
    cy.get('[class="square"]')
      .contains('0')
  });
});
