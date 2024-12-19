describe('Login Functionality', () => {
  it('Login Success with Credential Valid', () => {
    // Visit URL
    cy.visit('https://www.saucedemo.com/')

    // Input username dan password
    cy.get('.login_logo').should('have.text', 'Swag Labs')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    // Click button Login
    cy.get('#login-button').click()

    // Verify login success and go to product page
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')

    // Screenshot as proof
    cy.screenshot('login-success')
  })
})
