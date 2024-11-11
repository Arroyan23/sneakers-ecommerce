import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// src/fontAwesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Mengimpor semua ikon dari solid

// Menambahkan seluruh ikon solid ke library
library.add(fas); // Ini akan menambahkan semua ikon dari paket solid ke library

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
