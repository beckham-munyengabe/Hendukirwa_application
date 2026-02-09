import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div>
      <Navbar />
      <header style={{ padding: "3rem", textAlign: "center", background: "#f0f0f0" }}>
        <h1>Privacy Policy</h1>
        <p>Your privacy matters to us at Hendukirwa Marketplace.</p>
      </header>

      <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
        <section>
          <h2>Information We Collect</h2>
          <p>We collect basic details such as your name, email, phone number, and delivery address when you place an order.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>Your information is used to process orders, deliver products, and provide customer support.</p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>We take steps to protect your data and ensure it is stored securely.</p>
        </section>

        <section>
          <h2>Sharing Information</h2>
          <p>We do not sell your data. Information is only shared with sellers and delivery partners to fulfill your order.</p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You can request to update or delete your personal information by contacting support@hendukirwa.com.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
