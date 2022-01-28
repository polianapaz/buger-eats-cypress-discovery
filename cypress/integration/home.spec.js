
//describe é usado para criar uma nova suite de testes
describe('home page', ()=>{           // ()=> arrow function em JavaScript
    it ('app deve estar online', ()=>{    //it é a plavara reservada no cypress para definir casos de teste
        // mudar resolução da tela
        //cy.viewport(1440, 900)
        // link do app a ser testado
        cy.visit('/')
        // fazer validação de algum elemento para garantir que o app está online
        cy.get('h1').should('contain.text', 'Seja um parceiro')
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        // ele é case sensitive, esse exemplo vai subir um erro
        //cy.get('h1').should('have.text', 'Seja um parceiro entregador pela buger eats')
        cy.get('a').should('have.text', 'Cadastre-se para fazer entregas')
        //não dá certo esse teste abaixo
        //cy.get('img').should('have.text', 'Buger Eats')
    }) 
})