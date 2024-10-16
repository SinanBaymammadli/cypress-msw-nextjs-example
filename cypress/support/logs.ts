/**
 * Removes request logs in cypress UI
 */
beforeEach(() => {
	cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});
