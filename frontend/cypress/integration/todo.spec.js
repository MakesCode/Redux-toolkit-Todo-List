/* eslint-disable no-undef */
describe('todo', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('add new task', async () => {
        const newTask = '3 petits chats'
        await cy.wait(500)
        cy.get('[data-testid=inputAddTask]').type(`${newTask}{enter}`)
        cy.get('[data-testid=item]').last().should('have.text', '3 petits chatsSupprimer')
    })
})