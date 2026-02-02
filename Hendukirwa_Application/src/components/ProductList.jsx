import { useState } from "react";
import products from "../data/products";

export default function ProductList() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "2rem",
    padding: "2rem 0",
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

  const decorativeLineStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    opacity: hoveredCard ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      {products.map((p, index) => (
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
              <div style={badgeStyle}>
                New
              </div>
            )}
          </div>

          {/* Card Content */}
          <div style={cardContentStyle}>
            {/* Product Name and Price */}
            <div style={productHeaderStyle}>
              <h3 style={productNameStyle}>{p.product_name}</h3>
              <div style={priceTagStyle}>
                ${typeof p.product_price === 'number' ? p.product_price.toFixed(2) : p.product_price}
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
          <div style={{
            ...decorativeLineStyle,
            opacity: hoveredCard === p.product_id ? 1 : 0,
          }} />
        </div>
      ))}
    </div>
  );
}