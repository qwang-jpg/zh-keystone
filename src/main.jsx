import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@fontsource-variable/inter";
import "@/index.css";

// Each deploy replaces the hashed JS chunks, so a tab opened before the
// deploy can fail to lazy-load a page it hasn't visited yet. Reload once to
// pick up the new build; if that already happened in the last minute, let
// the error through to ErrorBoundary instead of looping.
window.addEventListener("vite:preloadError", (event) => {
  try {
    const lastReload = Number(sessionStorage.getItem("keystone:chunk-reload")) || 0;
    if (Date.now() - lastReload < 60_000) return;
    sessionStorage.setItem("keystone:chunk-reload", String(Date.now()));
  } catch {
    return;
  }
  event.preventDefault();
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
