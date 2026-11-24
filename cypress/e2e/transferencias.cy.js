describe("Transferências", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.usuarioValido.username);
      cy.get("#senha").click().type(credenciais.usuarioValido.senha);
    });
    cy.contains("button", "Entrar").click();
  });

  it("Deve realizar uma transferência com sucesso", () => {
    cy.get('label[for="conta-origem"]').parent().as("campoContaOrigem");
    cy.get("@campoContaOrigem").click();
    cy.get("@campoContaOrigem").contains("João da Silva").click();

    cy.get('label[for="conta-destino"]').parent().as("campoContaDestino");
    cy.get("@campoContaDestino").click();
    cy.get("@campoContaDestino").contains("Maria Oliveira").click();

    cy.get("#valor").click().type("100.00");
    cy.contains("button", "Transferir").click();
    cy.get(".toast").should("have.text", "Transferência realizada!");
  });
});
