import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage.js";
import ProductPage from "./screens/ProductPage/ProductPage.js";
import ProductPreviewPage from "./screens/ProductPreviewPage/ProductPreviewPage.js";
import CartPage from "./screens/CartPage/CartPage.js";
import WishlistPage from "./screens/WishlistPage/WishlistPage.js";
import LoginPage from "./screens/LoginPage/LoginPage.js";
import SearchPage from "./screens/SearchPage/SearchPage.js";
import ErrorPage from "./screens/ErrorPage/ErrorPage.js";
import PrivateRoute from "./components/privateRoute/PrivateRoute.js";
import Toast from "./components/toast/Toast.js";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ErrorModal from "./components/errorModal/errorModal";
import { useTheme } from "./contexts/themeContext/themeContext.js";
function App() {
  const { theme } = useTheme();
  return (
    <div className="app" style={{ backgroundColor: theme.primaryBackground }}>
      <ErrorModal />
      <Toast />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route
          path="/productdetails/:productId"
          element={<ProductPreviewPage />}
        />
        <PrivateRoute path="/cart" element={<CartPage />} />
        <PrivateRoute path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
