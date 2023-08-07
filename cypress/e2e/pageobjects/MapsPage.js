/// <reference types="Cypress" />

class MapsPage {
    navigate() { 
      cy.visit('www.vr.com.br/onde-aceita.htm') //Acessando página
     }
     submit() {
       cy.get('.vr-button--negative').click() //Acionando botão "Onde usar o meu cartão"
    }
      ValidateFirst() {
        cy.contains('Rede credenciada').should('be.visible') //Validando mensagem "Maps"
     }
     ValidateSecond() {
      cy.contains('Conheça todos os estabelecimentos que aceitam VR').should('be.visible') //Validando segunda mensagem "Maps"
   }
     
  }
  
  export default MapsPage;
  