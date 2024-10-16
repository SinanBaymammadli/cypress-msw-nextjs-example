import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const mockingEnabled = !!process.env.NEXT_PUBLIC_API_MOCKING;
  const [shouldRender, setShouldRender] = useState(!mockingEnabled);

  useEffect(() => {
    if (mockingEnabled) {
      import("../mocks").then(({ initMocks }) => {
        initMocks().then(() => {
          setShouldRender(true);
        });
      });
    }
  }, [mockingEnabled]);

  return shouldRender ? <Component {...pageProps} /> : <>Loading mocks...</>;
}
