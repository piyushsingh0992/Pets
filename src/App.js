import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./screens/HomePage/HomePage.js";
import ProductPage from "./screens/ProductPage/ProductPage.js";
import ProductPreviewPage from "./screens/ProductPreviewPage/ProductPreviewPage.js";
import CartPage from "./screens/CartPage/CartPage.js";
import WishlistPage from "./screens/WishlistPage/WishlistPage.js";
import LoginPage from "./screens/loginPage/LoginPage.js";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <HomePage /> */}
      {/* <ProductPage/> */}
      {/* <ProductPreviewPage/> */}
      {/* <CartPage/> */}
      {/* <WishlistPage/> */}
      {/* <LoginPage/> */}

      <Footer />
    </div>
  );
}

export default App;
