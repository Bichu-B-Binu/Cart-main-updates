import "./assets/styles/bootstrap.custom.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreens } from "./components/screens/HomeScreens";
import { Route, Routes } from "react-router-dom";
import { ProductScreen } from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import LoginScreen from "./components/screens/LoginScreen";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterScreen from "./components/screens/RegisterScreen";
import ShippingScreen from "./components/screens/ShippingScreen";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreens />} />
          <Route path="product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          <Route path="" element={<PrivateRoutes />}>
            <Route path="/shipping" element={<ShippingScreen />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
