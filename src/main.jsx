import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import font toàn cục
import "./index.css";
import App from "./App.jsx";
// import font
import "@fontsource/roboto-slab";
import "@fortawesome/fontawesome-free/css/all.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
