import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pricing from "./Pricing.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pricing />
  </StrictMode>
);
