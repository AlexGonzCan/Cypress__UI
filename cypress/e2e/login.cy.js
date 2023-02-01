describe("Test Login", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
  });

  it.only("Login valid", () => {
    cy.url().should("include", "amazon.com/");
    cy.get("#nav-link-accountList").trigger("mouseover");
    cy.get("#nav-flyout-ya-signin").click();
    cy.get("#ap_email").type("kalex_agc@hotmail.com");
    cy.get("#continue").click();
    cy.get("#ap_password").type("holaa12345");
    cy.get("#signInSubmit").click();
    cy.get("#nav-link-accountList").trigger("mouseover");
    cy.get("#nav-item-signout").then((element) => {
      expect(element).to.not.visible;
    });
    cy.get("#nav-item-signout")
      .find("span")
      .should("have.text", "Cerrar Sesión");
  });
  it("Login invalid ", () => {
    cy.url().should("include", "amazon.com/");
    cy.get("#nav-link-accountList").trigger("mouseover");
    cy.get("#nav-flyout-ya-signin").click();
    cy.get("#ap_email").type("emailerror@hotmail.com");
    cy.get("#continue").click();

    cy.get("#auth-error-message-box")
      .find("span")
      .should("be.visible")
      .and(
        "contain",
        "No pudimos encontrar una cuenta con esa dirección de correo electrónico"
      );
  });
});
