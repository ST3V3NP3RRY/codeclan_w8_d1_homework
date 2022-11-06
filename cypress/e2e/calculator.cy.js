/* eslint-disable no-undef */
describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("The number buttons should update the display of the running total", () => {
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number1").click();
    cy.get(".display").should("contain", "1");
  });

  it("the arithmetical operations should update the display with the result of the operation", () => {
    cy.get("#number4").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "12");
  });

  it("Multiple opeartions should be able to be chained together", () => {
    cy.get("#number4").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number4").click();
    cy.get("#operator_add").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "11");
  });

  it("Should be able to display decimal numbers", () => {
    cy.get("#number2").click();
    cy.get("#decimal").click();
    cy.get("#number4").click();
    cy.get("#operator_add").click();
    cy.get("#number7").click();
    cy.get("#decimal").click();
    cy.get("#number1").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "9.5");
  });

  it("Should be able to display negative numbers", () => {
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-2");
  });

  it("8 divided by 0 should return undefined", () => {
    cy.get("#number8").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", NaN);
  });
});
