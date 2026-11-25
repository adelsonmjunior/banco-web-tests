# Testes automatizados da aplicação Banco Web

Projeto de testes end-to-end desenvolvido com Cypress e JavaScript para automatizar os principais fluxos da aplicação [banco-web](https://github.com/juliodelimas/banco-web). Os testes cobrem login e transferências, incluindo cenários de sucesso e validações de erro.

## Componentes do projeto

- **Cypress**: executa os testes end-to-end no navegador.
- **Specs** (`cypress/e2e/`): cenários de login e transferências.
- **Custom Commands** (`cypress/support/commands/`): ações e verificações reutilizáveis nos testes.
- **Fixtures** (`cypress/fixtures/`): dados de teste, incluindo as credenciais usadas nos cenários de login.
- **cypress-mochawesome-reporter**: gera relatórios HTML dos resultados.
- **Configuração** (`cypress.config.js`): define a URL base (`http://localhost:4000`) e integra o reporter.

## Pré-requisitos

- Node.js e npm instalados.
- A [API banco-api](https://github.com/juliodelimas/banco-api) e a aplicação [banco-web](https://github.com/juliodelimas/banco-web) devem estar em execução durante os testes.
- A aplicação web deve estar acessível em `http://localhost:4000`, conforme definido em `cypress.config.js`.

Inicie a API e a aplicação seguindo as instruções dos respectivos repositórios antes de executar os testes. Confirme também que a aplicação consegue se comunicar com a API.

## Instalação

Clone este repositório, acesse a pasta do projeto e instale as dependências:

```bash
git clone https://github.com/adelsonmjunior/banco-web-tests.git
cd banco-web-tests
npm ci
```

`npm ci` instala as dependências registradas no `package-lock.json`. Também é possível usar `npm install`.

## Execução

Com a API e a aplicação web em execução, use um dos comandos:

| Comando | Descrição |
| --- | --- |
| `npm test` | Executa os testes no modo headless. |
| `npm run test-qa` | Executa `cypress run`, equivalente a `npm test`. |
| `npm run cy:headed` | Executa os testes em um navegador visível. |
| `npm run cy:open` | Abre a interface do Cypress para selecionar e executar os testes. |

O reporter gera o relatório HTML em `cypress/reports/html/index.html`. A pasta de relatórios é ignorada pelo Git e pode ser recriada ao rodar os testes.

## Testes automatizados

### Login — `cypress/e2e/login.cy.js`

- Login com credenciais válidas: verifica que a tela de transferência fica visível.
- Login com credenciais inválidas: verifica a mensagem de erro no toast.

### Transferências — `cypress/e2e/transferencias.cy.js`

- Transferência de `R$ 100,00`: verifica a mensagem de sucesso.
- Transferência acima de `R$ 5.000,00` sem token: verifica a mensagem de que é necessária autenticação.

Os dados de login dos cenários estão em `cypress/fixtures/credenciais.json`.

## Custom Commands

Os comandos são importados por `cypress/support/commands.js` e ficam organizados por assunto:

| Comando | Arquivo | Finalidade |
| --- | --- | --- |
| `cy.fazerLoginComCredenciaisValidas()` | `cypress/support/commands/login.js` | Preenche e envia o formulário usando os dados válidos da fixture. |
| `cy.fazerLoginComCredenciaisInvalidas()` | `cypress/support/commands/login.js` | Preenche e envia o formulário usando os dados inválidos da fixture. |
| `cy.validarMensagemDoToast(mensagem)` | `cypress/support/commands/common.js` | Verifica o texto exibido no toast. |
| `cy.selecionarOpcaoNaComboBox(labelDoCampo, opcao)` | `cypress/support/commands/common.js` | Abre a combo box identificada pelo campo e seleciona uma opção. |
| `cy.realizarTransferencia(contaOrigem, contaDestino, valor)` | `cypress/support/commands/transferencias.js` | Seleciona as contas de origem e destino, informa o valor e envia a transferência. |

