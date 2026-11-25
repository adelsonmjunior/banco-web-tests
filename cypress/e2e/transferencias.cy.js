describe("Transferências", () => {
  beforeEach(() => {
    cy.fazerLoginComCredenciaisValidas();
  });

  it("Deve realizar uma transferência com sucesso", () => {
    cy.realizarTransferencia("João da Silva", "Maria Oliveira", "100.00");
    cy.validarMensagemDoToast("Transferência realizada!");
  });

  it("Deve apresentar mensagem de erro ao tentar transferir valor maior que 5000 sem informar o token", () => {
    cy.realizarTransferencia("João da Silva", "Maria Oliveira", "5000.01");
    cy.validarMensagemDoToast("Autenticação necessária para transferências acima de R$5.000,00.");
  });
});
