import "@fontsource/lato";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./Routes";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
