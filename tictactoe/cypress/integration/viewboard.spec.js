describe('Viewing the board', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Displays who the next player is', () => {
    cy.contains("Next player: X")
  });
  it('Displays the grid', () => {
    cy.get('[class="square1"]')
      .should('have.value', '');
  })
  it('Clicking on a square fills it with an X', () => {
    const tileOne = cy
    cy.get('[class="square0"]')
      .click()

    tileOne.should("have.text", "X")
  });
  it('Clicking on a second square fills it with an O', () => {
    cy.get('[class="square0"]')
      .click()
      .contains("X")

    cy.get('[class="square3"]')
      .click()
      .contains("O")
  })
  it('calculates a winner', () => {
    cy.get('[class="square0"]')
      .click()
    cy.get('[class="square4"]')
      .click()
    cy.get('[class="square1"]')
      .click()
    cy.get('[class="square5"]')
      .click()
    cy.get('[class="square2"]')
      .click()
    cy.contains("Winner: X")
  })
  it('you cannot click any square if someone has already won', () => {
    cy.get('[class="square0"]')
      .click()
    cy.get('[class="square4"]')
      .click()
    cy.get('[class="square1"]')
      .click()
    cy.get('[class="square5"]')
      .click()
    cy.get('[class="square2"]')
      .click()
    cy.get('[class="square8"]')
      .click()
      .should("have.text", "")
  })
  it('should stop you from clicking a tile that has already been taken', () => {
    cy.get('[class="square0"]')
      .click()
      .click()
      .contains("X")
  })
});
