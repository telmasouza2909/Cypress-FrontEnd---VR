Feature: Pra Você - Onde Aceita

    Background: Acessar o site do VR
        Given acesso o site VR

    @testeum
    Scenario: Validar onde usar meu cartão VR
        When navego até a seção Pra Você - onde aceita
        And aciono no botão Onde usar meu cartão VR
        Then devo visualizar o mapa Google