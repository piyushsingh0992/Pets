import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/themeContext";
import { LanguageProvider } from "./contexts/languageContext";
import { WishlistProvider } from "./contexts/wishlistContext";
import { CartProvider } from "./contexts/cartContext";
import { AuthProvider } from "./contexts/authContext";
import { ToastProvider } from "./contexts/toastContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorProvider } from "./contexts/errorContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorProvider>
        <AuthProvider>
          <ToastProvider>
            <ThemeProvider>
              <LanguageProvider>
                <WishlistProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
                </WishlistProvider>
              </LanguageProvider>
            </ThemeProvider>
          </ToastProvider>
        </AuthProvider>
      </ErrorProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
