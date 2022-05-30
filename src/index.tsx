import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
export const ThemeContext = createContext<"light" | "dark">("light");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>
  </StrictMode>
);
