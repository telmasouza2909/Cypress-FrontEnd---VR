import MapsPage from '../pageobjects/MapsPage'

describe('Maps Test', function () {
  it('Accessing "Onde usar o meu cartão" and validate', function () {
    const maps = new MapsPage();
    maps.navigate(); //acesso a página VR
    cy.clearCookies()
    maps.submit(), //aciono opção do menu
    cy.clearCookies()
    maps.ValidateFirst(); //valida primeiro elemento
    cy.clearCookies()
    maps.ValidateSecond(); //valida segundo elemento
    cy.clearCookies()
  })
})

