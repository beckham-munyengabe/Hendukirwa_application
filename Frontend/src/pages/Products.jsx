import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";

export default function Products() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on search and category
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.product_description.toLowerCase().includes(searchQuery.toLowerCase());
    // Add category filtering logic if you have categories in your data
    return matchesSearch;
  });

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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem",
  };

  const cardStyle = (productId) => ({
    position: "relative",
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "0",
    transition: "all 0.3s ease",
    boxShadow: hoveredCard === productId
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    transform: hoveredCard === productId ? "translateY(-8px)" : "translateY(0)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  });

  const productImagePlaceholderStyle = {
    width: "100%",
    height: "240px",
    background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  };

  const imageIconStyle = {
    width: "70px",
    height: "70px",
    color: "#cbd5e1",
  };

  const cardContentStyle = {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  };

  const productHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "0.75rem",
    gap: "1rem",
  };

  const productNameStyle = {
    fontSize: "1.125rem",
    fontWeight: "700",
    color: "#0f172a",
    lineHeight: "1.4",
    flex: 1,
  };

  const priceTagStyle = {
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    color: "#fff",
    padding: "0.375rem 0.875rem",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "700",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 4px rgba(79, 70, 229, 0.2)",
  };

  const productDescriptionStyle = {
    fontSize: "0.875rem",
    color: "#64748b",
    lineHeight: "1.6",
    marginBottom: "1.25rem",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    flexGrow: 1,
  };

  const buttonStyle = (productId) => ({
    width: "100%",
    padding: "0.875rem 1.5rem",
    background: hoveredButton === productId
      ? "linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #db2777 100%)"
      : "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "0.9375rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: hoveredButton === productId
      ? "0 10px 15px -3px rgba(79, 70, 229, 0.4)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transform: hoveredButton === productId ? "scale(1.02)" : "scale(1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "auto",
  });

  const badgeStyle = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    background: "rgba(255, 255, 255, 0.95)",
    color: "#4f46e5",
    padding: "0.375rem 0.875rem",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: "700",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(79, 70, 229, 0.2)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const decorativeLineStyle = (productId) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    opacity: hoveredCard === productId ? 1 : 0,
    transition: "opacity 0.3s ease",
  });

  const emptyStateStyle = {
    textAlign: "center",
    padding: "4rem 2rem",
    color: "#64748b",
  };

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
        {/* Filter Section */}
        <div style={filterSectionStyle}>
          <div style={resultCountStyle}>
            Showing <span style={resultCountNumberStyle}>{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
          
          <div style={filterButtonsStyle}>
            <button
              style={filterButtonStyle(selectedCategory === "all")}
              onClick={() => setSelectedCategory("all")}
              onMouseEnter={(e) => {
                if (selectedCategory !== "all") {
                  e.target.style.background = "#f8fafc";
                  e.target.style.borderColor = "#cbd5e1";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== "all") {
                  e.target.style.background = "#fff";
                  e.target.style.borderColor = "#e2e8f0";
                }
              }}
            >
              All Products
            </button>
            <button
              style={filterButtonStyle(selectedCategory === "featured")}
              onClick={() => setSelectedCategory("featured")}
              onMouseEnter={(e) => {
                if (selectedCategory !== "featured") {
                  e.target.style.background = "#f8fafc";
                  e.target.style.borderColor = "#cbd5e1";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== "featured") {
                  e.target.style.background = "#fff";
                  e.target.style.borderColor = "#e2e8f0";
                }
              }}
            >
              Featured
            </button>
            <button
              style={filterButtonStyle(selectedCategory === "new")}
              onClick={() => setSelectedCategory("new")}
              onMouseEnter={(e) => {
                if (selectedCategory !== "new") {
                  e.target.style.background = "#f8fafc";
                  e.target.style.borderColor = "#cbd5e1";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== "new") {
                  e.target.style.background = "#fff";
                  e.target.style.borderColor = "#e2e8f0";
                }
              }}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div style={gridStyle}>
            {filteredProducts.map((p, index) => (
              <div
                key={p.product_id}
                style={cardStyle(p.product_id)}
                onMouseEnter={() => setHoveredCard(p.product_id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Product Image */}
                <div style={productImagePlaceholderStyle}>
                  <svg style={imageIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  {index % 3 === 0 && (
                    <div style={badgeStyle}>New</div>
                  )}
                </div>

                {/* Card Content */}
                <div style={cardContentStyle}>
                  {/* Product Name and Price */}
                  <div style={productHeaderStyle}>
                    <h3 style={productNameStyle}>{p.product_name}</h3>
                    <div style={priceTagStyle}>
                      ${typeof p.product_price === "number" ? p.product_price.toFixed(2) : p.product_price}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={productDescriptionStyle}>{p.product_description}</p>

                  {/* Order Button */}
                  <button
                    style={buttonStyle(p.product_id)}
                    onMouseEnter={() => setHoveredButton(p.product_id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => alert(`Ordering ${p.product_name}!`)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Order Now
                  </button>
                </div>

                {/* Decorative bottom line on hover */}
                <div style={decorativeLineStyle(p.product_id)} />
              </div>
            ))}
          </div>
        ) : (
          <div style={emptyStateStyle}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 1rem", color: "#cbd5e1" }}>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#334155", marginBottom: "0.5rem" }}>
              No products found
            </h3>
            <p style={{ fontSize: "1rem", color: "#64748b" }}>
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}