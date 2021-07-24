import "./App.css";
import { Routes, Route} from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductPage from "./screens/productPage";
import ProductPreviewPage from "./screens/productPreviewPage";
import CartPage from "./screens/cartPage";
import WishlistPage from "./screens/wishlistPage";
import LoginPage from "./screens/loginPage";
import SearchPage from "./screens/searchPage";
import ErrorPage from "./screens/errorPage";
import PrivateRoute from "./components/privateRoute";
import Toast from "./components/toast";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ErrorModal from "./components/errorModal";
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
