describe("Register the new user ", () => {
  it("User can to access mouse over for Hola, Identifícate", () => {
    // cy.get("#sp-cc-rejectall-link").click(); //cookies
    cy.visit("https://www.amazon.com/");
    cy.url().should("include", "amazon.com/");
    cy.get("#nav-link-accountList").trigger("mouseover");
    cy.get("#nav-flyout-ya-signin").click();
    cy.get("#createAccountSubmit").click();

    //Register data
    cy.url().should("include", "amazon.com/ap/register");
    cy.get("#ap_customer_name").type("Alex");
    cy.get("#ap_email").type("kalex_agc@hotmail.com");
    cy.get("#ap_password").type("holaa12345");
    cy.get("#ap_password_check").type("holaa12345");
    cy.get("#continue").click();

    //Code verification
    cy.get("#cvf-input-code").type("code");
    cy.get("#cvf-submit-otp-button").click();
  });
});
