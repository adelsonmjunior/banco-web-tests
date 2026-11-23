describe("Login", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("http://localhost:4000/");
  });

  it("Login com credenciais válidas deve permitir acesso ao sistema", () => {
    //Act
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("123456");
    cy.contains("button", "Entrar").click();
    //Assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com credenciais inválidas deve exibir mensagem de erro", () => {
    //Act
    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("1234567");
    cy.contains("button", "Entrar").click();
    //Assert
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
