describe('Viewing the board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Displays who the next player is', () => {
    cy.contains("Next player: X")
  });
  it('Displays the grid', () => {
    cy.get('[class="square"]')
      .contains('0')
  });
});
