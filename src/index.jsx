import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

export default function createExternalRoot(container) {
  const root = createRoot(container);
  console.log(container)
debugger
  return {
    async render(context) {
      const JSON = context.JSON;

      root.render(<App />);
    },
    unmount() {
      root.unmountComponentAtNode(container);
    },
  };
}
