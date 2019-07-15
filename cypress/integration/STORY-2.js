import { URL, viewports } from "../support/helper";
describe("STORY-2 - Seting up a heading content", () => {
  viewports.forEach(view => {
    context("run in " + view, () => {
      beforeEach(() => {
        cy.visit(URL);
        cy.viewport(view);
      });
      it("AC2-should have button content", () => {
        // AC2- As a user, I want to see
        // back and submit button and a
        // separetor above the button
        cy.get(".sh-actions button")
          .contains("Back")
          .should("be.visible");
        cy.get(".sh-actions button")
          .contains("Submit")
          .should("be.visible");
      });
      it("AC3- Should have add billing addres section", () => {
        // AC3- As a user, I want to see
        // add new billing addess component.
        // need to loaded by content service.
        cy.get(".sh-add-card")
          .contains("Add New")
          .should("be.visible");
        cy.get(".sh-add-card")
          .contains("Billing Address")
          .should("be.visible");
        cy.get(".sh-add-card .sh-icon.sh-i-icon-add-active").should(
          "be.visible"
        );
      });
    });
  });
});
