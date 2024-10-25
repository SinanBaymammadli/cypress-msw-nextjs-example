export async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");

    server.listen({ onUnhandledRequest: "bypass" });
  } else {
    const { worker } = await import("./browser");

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
  }
}
