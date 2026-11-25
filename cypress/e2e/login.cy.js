describe("Login", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("/");
  });

  it("Login com credenciais válidas deve permitir acesso ao sistema", () => {
    //Act
    cy.fazerLoginComCredenciaisValidas();
    //Assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com credenciais inválidas deve exibir mensagem de erro", () => {
    //Act
    cy.fazerLoginComCredenciaisInvalidas();
    //Assert
    cy.validarMensagemDoToast('Erro no login. Tente novamente.');
  });
});
