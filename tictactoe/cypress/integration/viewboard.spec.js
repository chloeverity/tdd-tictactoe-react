
describe('Viewing the board', () => {
  it('Displays who the next player is', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Next player: X")
  })
})
