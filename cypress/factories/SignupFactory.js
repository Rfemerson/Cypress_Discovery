var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '85988858471',
            address: {
                postalcode: '60050071',
                street: 'Rua Barão de Aratanha',
                number: '1252',
                details: 'apto 10',
                district: 'José Bonifácio',
                city_state: 'Fortaleza/CE'                               
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg.jpg' 
        }    
        
        return data 
        
    }
}