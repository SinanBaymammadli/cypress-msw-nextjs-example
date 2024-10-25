import type { RequestHandler } from "msw";
import { worker } from "../../mocks/browser";

declare global {
  namespace Cypress {
    interface Chainable {
      interceptRequest(...handlers: RequestHandler[]): void;
    }
  }
}

Cypress.on("test:before:run:async", async () => {
  await worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/order/mockServiceWorker.js",
      options: {
        // Override the scope to the root ("/").
        // By default, the worker is scoped to its location on your server,
        // which in this case would be "/prefix".
        scope: "/",
      },
    },
  });
});

Cypress.on("test:before:run", () => {
  if (!worker) return;
  worker.resetHandlers();
});

Cypress.Commands.add("interceptRequest", (...handlers: RequestHandler[]) => {
  if (!worker) return;
  worker.use(...handlers);
});
