import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearchEngine from "./WeatherSearchEngine";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <WeatherSearchEngine city="Melbourne" />
    </div>
  </StrictMode>
);
