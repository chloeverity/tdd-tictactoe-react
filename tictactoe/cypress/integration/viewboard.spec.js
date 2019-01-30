describe('Viewing the board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Displays who the next player is', () => {
    cy.contains("Next player: X")
  });
  it('Displays the grid', () => {
    cy.get('[class="square"]')
      .last()
      .should('have.value', '');
  })
  it('Clicking on a square fills it with an X', () => {
    const tileOne = cy
    cy.get('[class="square"]')
      .first()
      .click()

    tileOne.should("have.text", "X")
  });
  it('Clicking on a second square fills it with an O', () => {
    cy.get('[class="square"]')
      .first()
      .click()
      .contains("X")

    cy.get('[class="square"]')
      .last()
      .click()
      .contains("O")
  })
});
