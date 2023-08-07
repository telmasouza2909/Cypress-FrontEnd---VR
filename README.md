# cypress-cucumber-structure

## Estrutra de projeto utilizando Cypress com Cucumber

### Ferramentas

<li>Instalar Node.js.</li>
<li>Escolher uma IDE de JavaScript para programar, exemplo: VS Code.</li>
<li>Crie o diretório do projeto</li>
<li>Abre a IDE e abre a pasta do diretório do projeto</li>


  
### Primeiros comandos, para estrutura o projeto

<li>No terminal, dentro do diretório, execute o comando npm init --y (este comando irá criar o arquivo package.json na raiz do projeto).</li>
<li>Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto: <i>npm install</i></li>
        <li>Exemplo: <i>npm install -D cypress@5.3.0</i></li>
<li>No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir o Cypress em modo interativo e irá criar a estrutura inicial para os testes automatizados) <i>npx cypress open</i></li>

  
  
### Configurar a Base URL

<li>No arquivo ´cypress.json´, informe a url</i></li>

```json
{
    "baseUrl": "http://localhost/"
}
```

### Inicializando o arquivo .gitignore</b>

<li>No mesmo diretório, crie um arquivo chamado `.gitignore`, com o seguinte conteúdo:</li>

```.gitignore
.DS_Store
cypress.env.json
cypress/screenshots/
cypress/videos/
node_modules/
temp/
```

### Execuções dos testes

- Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code, conforme configurado no arquivo ´package.json´:
- Para executar os testes via terminal: <i>npx cypress run</i>
- Para executar os testes via browser: <i>npx cypress run --browser chrome --no-exit</i>
- Para executar os testes via script salvo em package.json: <i>npm run test:chrome</i>   


### Outrros fontes
- Tutorial completo de utilização do Cypress com Cucumber: https://medium.com/@cartelli.gf/testes-automatizados-com-cypress-e-cucumber-d78b211da766
- Curso intermediario Cypress: https://gitlab.com/wlsf82/curso-cypress-intermediario/tree/passo-a-passo-e-solucao-final#aula-5-testes-de-api
