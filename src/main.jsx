import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./routes/App";
import LoginPage from "./routes/Login.jsx";
import { isLoggedIn } from "./services/localStorageService.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{isLoggedIn() ? <App /> : <LoginPage />}</React.StrictMode>,
);
