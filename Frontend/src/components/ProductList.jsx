import { useState, useEffect } from "react";
import axios from "axios";
import DefaultPhoto from "../images/logo.png";

/* =========================
   Product Image Component
========================= */
function ProductImage({ product, index, hoveredCard }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const containerStyle = {
    width: "100%",
    height: "240px",
    background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: imageLoaded ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  const spinnerStyle = {
    width: "40px",
    height: "40px",
    border: "4px solid #e2e8f0",
    borderTop: "4px solid #4f46e5",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const badgeStyle = {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    background: "white",
    color: "#4f46e5",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    zIndex: 10,
  };

  const stockBadgeStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background:
      product.product_remaining_quantity > 0 ? "#22c55e" : "#ef4444",
    color: "white",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    zIndex: 10,
  };

  const getImageSource = () => {
    if (imageError || !product?.image_url) return DefaultPhoto;
    return `http://localhost:3000/uploads/${product.image_url}`;
  };

  return (
    <div style={containerStyle}>
      {!imageLoaded && !imageError && <div style={spinnerStyle} />}

      <img
        src={getImageSource()}
        alt={product.product_name}
        style={imageStyle}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
      />

      {index % 3 === 0 && <div style={badgeStyle}>New</div>}

      <div style={stockBadgeStyle}>
        {product.product_remaining_quantity > 0
          ? `${product.product_remaining_quantity} Left`
          : "Out of Stock"}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
          opacity: hoveredCard === product.product_id ? 1 : 0,
          transition: "0.3s",
        }}
      />

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/* =========================
   Product Info Component
========================= */
function ProductInfo({ product, hoveredButton, setHoveredButton }) {
  const handleOrder = () => {
    if (product.product_remaining_quantity > 0) {
      alert(`Ordering ${product.product_name}!`);
    }
  };

  return (
    <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{product.product_name}</h3>
        <div style={{ fontWeight: "bold" }}>
          ${Number(product.product_price).toFixed(2)}
        </div>
      </div>

      <p style={{ color: "#64748b", fontSize: "14px", margin: "10px 0" }}>
        {product.product_description}
      </p>

      <div style={{ marginBottom: "10px", fontSize: "13px" }}>
        Qty: {product.product_quantity} | Sold: {product.product_quantity_sold || 0}
      </div>

      <button
        onClick={handleOrder}
        onMouseEnter={() => setHoveredButton(product.product_id)}
        onMouseLeave={() => setHoveredButton(null)}
        disabled={product.product_remaining_quantity === 0}
        style={{
          marginTop: "auto",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          cursor:
            product.product_remaining_quantity > 0
              ? "pointer"
              : "not-allowed",
          background:
            product.product_remaining_quantity > 0
              ? "#4f46e5"
              : "#94a3b8",
          color: "white",
        }}
      >
        {product.product_remaining_quantity > 0
          ? "Order Now"
          : "Out of Stock"}
      </button>
    </div>
  );
}

/* =========================
   Main Product List
========================= */
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products-with-images")
      .then((response) => {
        console.log("ALL PRODUCTS:", response.data);

        // ✅ No grouping — show ALL products
        setProducts(response.data);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: "2rem" }}>Loading...</div>;

  if (error)
    return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;

  if (products.length === 0)
    return <div style={{ padding: "2rem" }}>No products available</div>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {products.map((product, index) => (
        <div
          key={product.product_id}
          onMouseEnter={() => setHoveredCard(product.product_id)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            overflow: "hidden",
            background: "white",
            transition: "0.3s",
            transform:
              hoveredCard === product.product_id
                ? "translateY(-6px)"
                : "translateY(0)",
          }}
        >
          <ProductImage
            product={product}
            index={index}
            hoveredCard={hoveredCard}
          />
          <ProductInfo
            product={product}
            hoveredButton={hoveredButton}
            setHoveredButton={setHoveredButton}
          />
        </div>
      ))}
    </div>
  );
}
