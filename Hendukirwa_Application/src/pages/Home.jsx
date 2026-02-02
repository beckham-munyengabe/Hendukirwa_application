import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Hendukirwa Marketplace</h1>
      <ProductList />   {/* ✅ ProductList is used here */}
      <Footer />
    </div>
  );
}
