import { mockName, mockTodos } from "../../mocks/handlers";

describe("template spec", () => {
  it("passes without mocks", () => {
    cy.visit("http://localhost:3003/order");
    cy.contains("Hello Sinan!").should("exist");
    cy.contains(
      "laboriosam mollitia et enim quasi adipisci quia provident illum"
    ).should("exist");
  });

  it("passes with mock", () => {
    cy.interceptRequest(
      mockTodos([
        {
          userId: 1,
          id: 1,
          title: "New todo",
          completed: false,
        },
      ]),
      mockName("Test")
    );

    cy.visit("http://localhost:3003/order");
    cy.contains("Hello Test!").should("exist");
    cy.contains("New todo").should("exist");
  });

  it("passes with different page", () => {
    cy.interceptRequest(
      mockTodos([
        {
          userId: 1,
          id: 1,
          title: "New todo",
          completed: false,
        },
      ]),
      mockName("Test")
    );

    cy.visit("http://localhost:3003/order/planning");

    cy.contains("Hello Planning Test!").should("exist");
    cy.contains("New todo").should("exist");
  });

  it("passes with mock and with multiple pages", () => {
    /**
     * NEXT_PUBLIC_API_MOCKING should be disabled for this case to pass
     */
    cy.interceptRequest(
      mockTodos([
        {
          userId: 1,
          id: 1,
          title: "New todo",
          completed: false,
        },
      ]),
      mockName("Test")
    );

    cy.visit("http://localhost:3003/order");
    cy.contains("Hello Test!").should("exist");
    cy.contains("New todo").should("exist");

    cy.contains("Planning").click();

    cy.contains("Hello Planning Test!").should("exist");
    cy.contains("New todo").should("exist");
  });
});
