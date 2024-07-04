import "./assets/styles/bootstrap.custom.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreens } from "./components/screens/HomeScreens";
import { Route, Routes } from "react-router-dom";
import { ProductScreen } from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreens />} />
          <Route path="product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
