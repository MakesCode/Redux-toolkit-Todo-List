/* eslint-disable no-undef */
describe('todo',  () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('add new task', async() => {
        const newTask = '3 petits chats'
        await cy.wait(500)
        cy.get('[data-testid=inputAddTask]')
            .type(`${newTask}{enter}`)
        cy.get('[data-testid=item]')
            .last()
            .should('have.text', '3 petits chatsSupprimer')
    })
    it('remove task', () => {
        cy.get('[data-testid="delete_Pecher du poisson"]')
            .click()
        cy.contains('Pecher du poisson')
            .should('not.exist')
    })
    it('checked task', () => {
        cy.contains('Arroser les plantes')
            .find('input[type=checkbox]')
            .check()
    })
    it('filter all tasks', () => {
        cy.get('[data-testid="item"')
            .should('have.length', 3)
    })
    it('filter uncompleted tasks', () => {
        cy.get('[data-testid="buttonActive"]')
            .click()
        cy.get('[data-testid="item"')
            .find('input[type=checkbox]')
            .should('not.be.checked')
    })
    it('filter completed tasks', () => {
        cy.get('[data-testid="buttonCompleted"]')
            .click()
        cy.get('[data-testid="item"')
            .find('input[type=checkbox]')
            .should('be.checked')
    })
    
})