import { faker } from '@faker-js/faker';
import { generate } from '@faker-js/faker'
import create from '../pages/RegisterPage'
import registerFactory from '../factories/RefistreFactory'

describe('Create user',()=>{

    it('Create user natura', function(){

        var data = registerFactory.register()

        create.go()
        create.fillForm(data)
        create.finish()

    }) 

})