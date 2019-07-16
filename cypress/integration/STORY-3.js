import { URL, viewports } from "../support/helper";
describe("STORY-3 - Adding list of billing address", () => {
  viewports.forEach(view => {
    context("run in " + view, () => {
      beforeEach(() => {
        cy.visit(URL);
        cy.viewport(view);
      });
      it("AC1-should see address list component", () => {
        // AC1- As a user, I want to see
        // previously added billing address.
        cy.get(".sh-address .sh-street").should("be.visible");
        cy.get(".sh-address .sh-street-address").should("be.visible");
      });

      it("AC2- should see highlighed when selected address", () => {
        // AC2- As a user, I want to see
        // when I select an adress
        // then I should see highlighted and a tick mark and a half circle
        cy.get(".sh-billing-address")
          .first()
          .find(".left-circle")
          .should("not.exist");
        cy.get(".sh-billing-address")
          .first()
          .click()
          .should("have.class", "selected")
          .find(".left-circle")
          .should("be.visible")
          .find(".sh-i-selected")
          .should("be.visible");
      });
    });
  });
});
