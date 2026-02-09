import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    seller_fname: "",
    seller_lname: "",
    email: "",
    password: "",
    phonenumber: "",
    address: ""
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ seller_fname: "", seller_lname: "", email: "", password: "", phonenumber: "", address: "" });
    setFile(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // --- LOGIN LOGIC ---
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });
        const data = await response.json();
        if (response.ok) {
          alert(`Welcome back, ${data.user.seller_fname}!`);
          navigate("/seller");
          // Save token or user info here if needed
        } else {
          alert(data.message || "Invalid Credentials");
        }
      } catch (err) {
        alert("Server error. Is your backend running?");
      }
    } else {
      // --- REGISTER LOGIC (Using FormData for Image Upload) ---
      const data = new FormData();
      data.append("seller_fname", formData.seller_fname);
      data.append("seller_lname", formData.seller_lname);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("phonenumber", formData.phonenumber);
      data.append("address", formData.address);
      data.append("seller_image", file);

      try {
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          body: data, // No headers needed, fetch sets boundary for FormData
        });
        if (response.ok) {
          alert("Registered Successfully!");
          setIsLogin(true);
        } else {
          alert("Registration failed.");
        }
      } catch (err) {
        alert("Error connecting to server.");
      }
    }
  };

  const colors = { primary: "#0F172A", accent: "#6366F1", bg: "#F8FAFC", border: "#E2E8F0" };

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main style={mainGridStyle}>
        {/* Left Panel */}
        <section style={brandPanelStyle(colors)}>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem" }}>
              {isLogin ? "Welcome back." : "Join our marketplace."}
            </h2>
            <p style={{ color: "#94A3B8" }}>Premium quality for premium sellers.</p>
          </div>
        </section>

        {/* Form Panel */}
        <section style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "450px" }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "2rem" }}>
              {isLogin ? "Sign In" : "Register as Seller"}
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {!isLogin && (
                <>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <input name="seller_fname" placeholder="First Name" onChange={handleChange} style={inputStyles} required />
                    <input name="seller_lname" placeholder="Last Name" onChange={handleChange} style={inputStyles} required />
                  </div>
                  <input name="phonenumber" placeholder="Phone Number" onChange={handleChange} style={inputStyles} required />
                  <input name="address" placeholder="Physical Address" onChange={handleChange} style={inputStyles} required />
                  <label style={{ fontSize: "0.8rem", fontWeight: "bold" }}>Profile Picture:</label>
                  <input type="file" onChange={handleFileChange} required />
                </>
              )}

              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} style={inputStyles} required />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} style={inputStyles} required />

              <button type="submit" style={buttonStyles}>{isLogin ? "Login" : "Create Account"}</button>
            </form>

            <button onClick={toggleForm} style={{ background: "none", border: "none", color: colors.accent, marginTop: "1.5rem", cursor: "pointer", fontWeight: "bold" }}>
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Styles
const mainGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", maxWidth: "1200px", margin: "0 auto" };
const brandPanelStyle = (c) => ({ background: c.primary, color: "white", padding: "3rem", borderRadius: "24px", margin: "1rem", display: "flex", alignItems: "center" });
const inputStyles = { width: "100%", padding: "0.8rem", borderRadius: "8px", border: "1px solid #E2E8F0", boxSizing: "border-box" };
const buttonStyles = { width: "100%", padding: "1rem", borderRadius: "8px", border: "none", background: "#0F172A", color: "white", fontWeight: "bold", cursor: "pointer" };