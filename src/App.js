import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./screens/HomePage/HomePage.js";
import ProductPage from "./screens/ProductPage/ProductPage.js";
import ProductPreviewPage from "./screens/ProductPreviewPage/ProductPreviewPage.js";
import CartPage from "./screens/CartPage/CartPage.js";
import WishlistPage from "./screens/WishlistPage/WishlistPage.js";
import LoginPage from "./screens/LoginPage/LoginPage.js";
import ErrorPage from "./screens/ErrorPage/ErrorPage.js";
import { useTheme } from "./contexts/themeContext/themeContext.js";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute.js";
import Toast from "./components/toast/Toast.js";
import "./App.css";
function App() {
  const { theme } = useTheme();
  return (
    <div className="app" style={{ backgroundColor: theme.primaryBackground }}>
      <Toast/>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <PrivateRoute path="/cart" element={<CartPage />} />
        <PrivateRoute path="/wishlist" element={<WishlistPage />} />

        <Route path="/products" element={<ProductPage />} />
        <Route
          path="/productdetails/:productId"
          element={<ProductPreviewPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
