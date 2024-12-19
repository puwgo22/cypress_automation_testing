describe('Add Product to Cart', () => {
    it('Add Product ke Cart Success', () => {
      // Login first
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
  
      // Click the "Add to Cart" button on the first product
      cy.get('.title').should('have.text', 'Products')
      cy.get('.inventory_item').last().find('button').contains('Add to cart').click()
  
      // Verify the cart icon shows the number 1
      cy.get('.shopping_cart_badge').should('have.text', '1')
  
      // Click the cart icon
      cy.get('.shopping_cart_link').click()
  
      // Verify the product appears in the cart
      cy.get('.title').should('have.text', 'Your Cart')
      cy.get('.cart_item').should('have.length', 1)
  
      // Screenshot as proof
      cy.screenshot('add-to-cart-success')
    })
  })
  