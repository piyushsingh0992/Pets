import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ProductPage from "./screens/ProductPage";
import ProductPreviewPage from "./screens/ProductPreviewPage";
import CartPage from "./screens/CartPage";
import WishlistPage from "./screens/WishlistPage";
import LoginPage from "./screens/LoginPage";
import SearchPage from "./screens/SearchPage";
import ErrorPage from "./screens/ErrorPage";
import PrivateRoute from "./components/privateRoute";
import Toast from "./components/toast";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ErrorModal from "./components/errorModal";
import { useTheme } from "./contexts/themeContext/themeContext.js";
import { useAuth } from "./contexts/authContext/authContext";
import axios from "axios"
function App() {
  const { theme } = useTheme();
  const navigate=useNavigate();
  const {loginDispatch}=useAuth();
 
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
