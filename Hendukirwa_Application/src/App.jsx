import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Home from "./pages/Home";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OrderTracking from "./pages/OrderTracking";
import Auth from "./pages/Auth";


import SellerDashboard from "./seller_component/pages/SellerDashboard";
import MyProducts from "./seller_component/pages/MyProducts";
import Orders from "./seller_component/pages/Orders";
import Earnings from "./seller_component/pages/Earnings";
import Messages from "./seller_component/pages/Messages";
import Profile from "./seller_component/pages/Profile";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/auth" element={<Auth />} />


        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<MyProducts />} />
        <Route path="/seller/orders" element={<Orders />} />
        <Route path="/seller/earnings" element={<Earnings />} />
        <Route path="/seller/messages" element={<Messages />} />
        <Route path="/seller/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
