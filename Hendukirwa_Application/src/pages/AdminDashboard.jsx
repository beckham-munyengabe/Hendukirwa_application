import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AdminDashboard() {
  return (
    <div>
      <Navbar />

      <header
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "#f0f0f0"
        }}
      >
        <h1>Admin Dashboard</h1>
        <p>Manage products, view orders, and track your sales performance.</p>
      </header>

      <main style={{ padding: "2rem" }}>
        {/* Product Management Section */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Product Management</h2>
          <button style={{ marginRight: "1rem" }}>Add Product</button>
          <button>Edit Product</button>
          <button style={{ marginLeft: "1rem" }}>Remove Product</button>
        </section>

        {/* Orders Section */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Orders</h2>
          <p>View and update buyer orders here.</p>
          <ul>
            <li>Order #101 – Pending</li>
            <li>Order #102 – Shipped</li>
            <li>Order #103 – Delivered</li>
          </ul>
        </section>

        {/* Analytics Section */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Sales Analytics</h2>
          <p>Graphs and reports will be displayed here.</p>
        </section>

        {/* Profile Section */}
        <section>
          <h2>Profile Management</h2>
          <p>Update your name, email, phone, and address.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
