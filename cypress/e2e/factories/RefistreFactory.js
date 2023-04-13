var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    register: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName}`,
            surname: `${lastName}`,
            email: faker.internet.email(firstName),
            pass: 'Teste@123',
            confirm_pass: 'Teste@123',
            cpf: cpf.generate(),	
        }

        return data
    }
}