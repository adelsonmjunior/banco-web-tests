Cypress.Commands.add("fazerLoginComCredenciaisValidas", () => {
  cy.visit("/");
  cy.fixture("credenciais").then((credenciais) => {
    cy.get("#username").click().type(credenciais.usuarioValido.username);
    cy.get("#senha").click().type(credenciais.usuarioValido.senha);
  });
  cy.contains("button", "Entrar").click();
});

Cypress.Commands.add("fazerLoginComCredenciaisInvalidas", () => {
  cy.visit("/");
  cy.fixture("credenciais").then((credenciais) => {
    cy.get("#username").click().type(credenciais.usuarioInvalido.username);
    cy.get("#senha").click().type(credenciais.usuarioInvalido.senha);
  });
  cy.contains("button", "Entrar").click();
});
