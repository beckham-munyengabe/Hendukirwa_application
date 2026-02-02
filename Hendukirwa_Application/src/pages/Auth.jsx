import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // (Your logic remains the same for functionality)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (isLogin) {
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        alert(`Welcome back, ${storedUser.name}!`);
      } else {
        alert("Invalid credentials.");
      }
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Account created successfully!");
      setIsLogin(true);
    }
  };

  // --- Theme Variables ---
  const colors = {
    primary: "#0F172A", // Deep Navy
    accent: "#6366F1",  // Indigo
    bg: "#F8FAFC",      // Ghost White
    text: "#334155",
    border: "#E2E8F0"
  };

  return (
    <div style={{ background: colors.bg, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      
      <main style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        minHeight: "calc(100vh - 80px)",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        
        {/* Left Side: The "Fine" Brand Panel */}
        <section style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          padding: "3rem",
          background: colors.primary,
          borderRadius: "32px",
          color: "white",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "relative", zIndex: 2 }}>
            <span style={{ 
              color: colors.accent, 
              fontWeight: "700", 
              textTransform: "uppercase", 
              letterSpacing: "2px",
              fontSize: "0.8rem"
            }}>
              Hendukirwa Premium
            </span>
            <h2 style={{ fontSize: "3.5rem", fontWeight: "800", margin: "1rem 0", lineHeight: "1" }}>
              {isLogin ? "Simplicity is\nSophistication." : "Design your\nOwn Future."}
            </h2>
            <p style={{ color: "#94A3B8", maxWidth: "400px", lineHeight: "1.6", fontSize: "1.1rem" }}>
              Join a community where quality meets efficiency. Our platform is designed for those who value time and aesthetic.
            </p>
          </div>

          {/* Decorative Overlapping Element */}
          <div style={{
            position: "absolute",
            bottom: "-20px",
            right: "-20px",
            width: "300px",
            height: "300px",
            background: "linear-gradient(135deg, #6366F1 0%, #A855F7 100%)",
            borderRadius: "40px",
            transform: "rotate(-10deg)",
            opacity: "0.2"
          }} />
        </section>

        {/* Right Side: The Minimalist Form */}
        <section style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: "4rem 2rem" 
        }}>
          <div style={{ width: "100%", maxWidth: "420px" }}>
            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.75rem", fontWeight: "700", color: colors.primary }}>
                {isLogin ? "Sign In" : "Register"}
              </h3>
              <p style={{ color: "#64748B", marginTop: "0.5rem" }}>
                {isLogin ? "Please enter your details to continue." : "Create a new account to get started."}
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {!isLogin && (
                <div className="input-field">
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Name</label>
                  <input 
                    name="name"
                    onChange={handleChange}
                    style={inputStyles} 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>
              )}

              <div className="input-field">
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  onChange={handleChange}
                  style={inputStyles} 
                  placeholder="name@company.com" 
                  required 
                />
              </div>

              <div className="input-field">
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", fontSize: "0.9rem" }}>Password</label>
                <input 
                  type="password" 
                  name="password"
                  onChange={handleChange}
                  style={inputStyles} 
                  placeholder="••••••••" 
                  required 
                />
              </div>

              <button type="submit" style={buttonStyles}>
                {isLogin ? "Sign In" : "Register Account"}
              </button>
            </form>

            <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: `1px solid ${colors.border}`, textAlign: "center" }}>
              <p style={{ color: "#64748B", fontSize: "0.9rem" }}>
                {isLogin ? "New here?" : "Already have an account?"}
                <button 
                  onClick={toggleForm} 
                  style={{ 
                    background: "none", 
                    border: "none", 
                    color: colors.accent, 
                    fontWeight: "700", 
                    cursor: "pointer", 
                    marginLeft: "0.5rem" 
                  }}
                >
                  {isLogin ? "Create account" : "Log in"}
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

// --- Specific Inline Styles for Cleanliness ---
const inputStyles = {
  width: "100%",
  padding: "1rem",
  borderRadius: "12px",
  border: "1px solid #E2E8F0",
  background: "#FFFFFF",
  fontSize: "1rem",
  transition: "all 0.2s ease",
  outline: "none",
  boxSizing: "border-box"
};

const buttonStyles = {
  width: "100%",
  padding: "1rem",
  borderRadius: "12px",
  border: "none",
  background: "#0F172A",
  color: "white",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  marginTop: "1rem"
};