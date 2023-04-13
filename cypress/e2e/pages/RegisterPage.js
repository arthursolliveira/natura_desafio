
class RegisterPage {

    go() {
        cy.visit('/')
        cy.get('button[id=onetrust-accept-btn-handler]').click()
        cy.get('span[class="MuiTypography-root MuiTypography-caption MuiTypography-colorInherit"]').eq(7).click()
        cy.get('button[type="button"]').eq(0).click()
    }

    fillForm(user) {
        cy.get('input[name="firstName"]').type(user.name)
        cy.get('input[name="lastName"]').type(user.surname)
        cy.get('input[name="email"]').type(user.email)

        cy.get('#password-field').type(user.pass)
        cy.get('#confirmPassword-field').type(user.confirm_pass)

        cy.get('input[name="cpf"]').type(user.cpf)
        cy.get('input[name="dateOfBirth"]').type('27091990')
        cy.get('input[value="male"]').check()
        cy.get('input[name="homePhone"]').type('1198836477')
        cy.get('#acceptedterms').check()
    }

    finish() {
        cy.contains('span', 'Criar Conta').click()
        cy.contains('Meus acessos').should('be.visible') 
    }

}
export default new RegisterPage;