import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (container.hasChildNodes()) {
  // If there's already content (SSR), hydrate
  hydrateRoot(container, <App />);
} else {
  // Otherwise, render normally
  createRoot(container).render(<App />);
}
