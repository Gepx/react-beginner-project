import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NormalClock from "./NormalClock.jsx";
import LedClock from "./LedClock.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/normal" element={<NormalClock />} />
        <Route path="/led" element={<LedClock />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
