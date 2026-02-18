import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

export default function Product() {
  // --- STATE FOR SEARCH AND FILTERS ---
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  
  // --- STATE FOR UI EFFECTS ---
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  // --- STYLES ---
  const pageContainerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
  };

  const headerStyle = {
    position: "relative",
    padding: "6rem 2rem 4rem",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    overflow: "hidden",
  };

  const headerDecorativeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    background: "radial-gradient(circle at 20% 50%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 80% 50%, #ec4899 0%, transparent 50%)",
  };

  const headerContentStyle = {
    position: "relative",
    zIndex: 1,
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headerTitleStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
    lineHeight: "1.2",
  };

  const headerSubtitleStyle = {
    fontSize: "1.125rem",
    color: "#cbd5e1",
    lineHeight: "1.6",
    marginBottom: "2rem",
  };

  const searchBarContainerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    position: "relative",
  };

  const searchInputStyle = {
    width: "100%",
    padding: "1rem 3.5rem 1rem 1.5rem",
    fontSize: "1rem",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const searchIconStyle = {
    position: "absolute",
    right: "1.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#cbd5e1",
    pointerEvents: "none",
  };

  const mainStyle = {
    flexGrow: 1,
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "4rem 2rem",
    width: "100%",
  };

  const filterSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3rem",
    flexWrap: "wrap",
    gap: "1rem",
  };

  const resultCountStyle = {
    fontSize: "1.125rem",
    color: "#64748b",
    fontWeight: "500",
  };

  const resultCountNumberStyle = {
    fontWeight: "700",
    color: "#0f172a",
  };

  const filterButtonsStyle = {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
  };

  const filterButtonStyle = (isActive) => ({
    padding: "0.625rem 1.5rem",
    border: isActive ? "2px solid transparent" : "2px solid #e2e8f0",
    borderRadius: "50px",
    background: isActive
      ? "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)"
      : "#fff",
    color: isActive ? "#fff" : "#64748b",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  });

  // --- RENDER ---
  return (
    <div style={pageContainerStyle}>
      <Navbar />

      <header style={headerStyle}>
        <div style={headerDecorativeStyle} />
        <div style={headerContentStyle}>
          <h1 style={headerTitleStyle}>Our Products</h1>
          <p style={headerSubtitleStyle}>
            Browse all available items from Hendukirwa Marketplace. Find quality products from trusted local sellers.
          </p>

          {/* Search Bar */}
          <div style={searchBarContainerStyle}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={searchInputStyle}
              onFocus={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            />
            <svg style={searchIconStyle} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
        </div>
      </header>

      <main style={mainStyle}>
        {/* Filter Section (The missing piece!) */}
        <div style={filterSectionStyle}>
          <div style={resultCountStyle}>
            Showing <span style={resultCountNumberStyle}>{activeFilter === 'all' ? 'All' : activeFilter}</span> Products
          </div>

          <div style={filterButtonsStyle}>
            <button 
              style={filterButtonStyle(activeFilter === "all")} 
              onClick={() => setActiveFilter("all")}
            >
              All Products
            </button>
            <button 
              style={filterButtonStyle(activeFilter === "Featured")} 
              onClick={() => setActiveFilter("Featured")}
            >
              Featured
            </button>
            <button 
              style={filterButtonStyle(activeFilter === "New Arrival")} 
              onClick={() => setActiveFilter("New Arrival")}
            >
              New Arrival
            </button>
          </div>
        </div>

        {/* Product List passing search and filter state */}
        <ProductList searchQuery={searchQuery} filter={activeFilter} />
      </main>

      <Footer />
    </div>
  );
}
