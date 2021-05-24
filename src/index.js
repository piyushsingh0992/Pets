import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/themeContext/themeContext.js";
import { LanguageProvider } from "./contexts/languageContext/languageContext.js";
import { WishlistProvider } from "./contexts/wishlistContext/wishlistContext.js";
import { PetsServer } from "./server/server.js";
import { CartProvider } from "./contexts/cartContext/cartContext.js";
import { AuthProvider } from "./contexts/authContext/authContext.js";

import { BrowserRouter as Router } from "react-router-dom";

PetsServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ThemeProvider>
          <LanguageProvider>
            <WishlistProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </WishlistProvider>
          </LanguageProvider>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
