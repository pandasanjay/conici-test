import { URL, viewports } from "../support/helper";
describe("STORY-1 - Basic layout and HEADER and FOOTER", () => {
  viewports.forEach(view => {
    context("run in " + view, () => {
      beforeEach(() => {
        cy.visit(URL);
        cy.viewport(view);
      });
      it("AC1- should have header and footer", () => {
        /**
         * AC1- As a user, I want to see
         * a responsive layout and
         * a header and footer.
         */
        cy.get(".sh-navbar")
          .contains("Smart Check-out")
          .should("be.visible");
        cy.get(".sh-footer").should("be.visible");
      });

      it("AC2- should have header content and other elements", () => {
        /**
         * AC2- As a user, I want to see
         * header with "Smart Chesk-out"
         * and a location and menu button
         */
        cy.get(".sh-navbar")
          .contains("Smart Check-out")
          .should("be.visible");

        cy.get(".sh-navbar .sh-menu")
          .children()
          .should("have.class", "sh-i-menu-bar");

        cy.get(".sh-navbar .sh-location")
          .children()
          .should("have.class", "sh-i-location-uk");
      });

      it("AC3- should have footer copyright text", () => {
        /**
         * AC3- As a user, I want to see
         * footer with copyright text
         * "@ 2018 - Hotel Beacons GmbH"
         */
        cy.get(".sh-footer")
          .contains("© 2018 - Hotel Beacons GmbH")
          .should("be.visible");
      });

      it("AC4- should have logos befor footer", () => {
        /**
         * AC4- As a user, I want to see
         * CONICHI and SMARTHOTEL logo
         * just above the footer
         */
        cy.get(".sh-footer")
          .prev()
          .children()
          .get("[data-selector='conichi-logo']")
          .should("be.visible");

        cy.get(".sh-footer")
          .prev()
          .children()
          .get("[data-selector='partner-logo']")
          .should("be.visible");
      });
    });
  });
});
