import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div>
      <Navbar />
      <header style={{ padding: "3rem", textAlign: "center", background: "#f0f0f0" }}>
        <h1>Terms of Service</h1>
        <p>Understand the rules and responsibilities when using Hendukirwa Marketplace.</p>
      </header>

      <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <section>
          <h2>Use of the Platform</h2>
          <p>By using Hendukirwa, you agree to follow our guidelines and respect other users.</p>
        </section>

        <section>
          <h2>Orders and Payments</h2>
          <p>Orders must be placed with accurate information. Payments are processed securely through approved methods.</p>
        </section>

        <section>
          <h2>Seller Responsibilities</h2>
          <p>Sellers must provide accurate product details and fulfill orders promptly.</p>
        </section>

        <section>
          <h2>Limitations</h2>
          <p>We are not responsible for delays caused by third‑party delivery services or unforeseen events.</p>
        </section>

        <section>
          <h2>Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the platform means you accept the changes.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
