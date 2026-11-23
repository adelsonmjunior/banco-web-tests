describe("Login", () => {
  beforeEach(() => {
    //Arrange
    cy.visit("http://localhost:4000/");
  });

  it("Login com credenciais válidas deve permitir acesso ao sistema", () => {
    //Act
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.usuarioValido.username);
      cy.get("#senha").click().type(credenciais.usuarioValido.senha);
    });
    cy.contains("button", "Entrar").click();
    //Assert
    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com credenciais inválidas deve exibir mensagem de erro", () => {
    //Act
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.usuarioInvalido.username);
      cy.get("#senha").click().type(credenciais.usuarioInvalido.senha);
    });
    cy.contains("button", "Entrar").click();
    //Assert
    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
