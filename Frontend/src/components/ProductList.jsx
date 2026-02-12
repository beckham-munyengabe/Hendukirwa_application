import { useState, useEffect } from "react";
import axios from "axios";
import DefaultPhoto from "../images/logo.png";

// Separate component for Product Image Display (dependent on product data)
function ProductImage({ product, index, hoveredCard }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: imageLoaded ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  const loadingSpinnerStyle = {
    width: "40px",
    height: "40px",
    border: "4px solid #e2e8f0",
    borderTop: "4px solid #4f46e5",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    position: "absolute",
  };

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
    zIndex: 10,
  };

  const stockBadgeStyle = {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: product.product_remaining_quantity > 0 
      ? "rgba(34, 197, 94, 0.95)" 
      : "rgba(239, 68, 68, 0.95)",
    color: "#fff",
    padding: "0.375rem 0.875rem",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: "700",
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
  };

  // Determine image source based on product data
  const getImageSource = () => {
    if (!product) return DefaultPhoto;
    if (imageError) return DefaultPhoto;
    if (product.image_url) {
      return `http://localhost:3000/uploads/${product.image_url}`;
    }
    return DefaultPhoto;
  };

  return (
    <div style={productImagePlaceholderStyle}>
      {/* Loading spinner */}
      {!imageLoaded && !imageError && (
        <div style={loadingSpinnerStyle} />
      )}

      {/* Product Image */}
      <img 
        src={getImageSource()} 
        style={imageStyle}
        alt={product?.product_name || "Product"}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
      />

      {/* New Badge (shows on every 3rd item) */}
      {index % 3 === 0 && (
        <div style={badgeStyle}>
          New
        </div>
      )}

      {/* Stock Badge (dependent on product quantity) */}
      <div style={stockBadgeStyle}>
        {product.product_remaining_quantity > 0 
          ? `${product.product_remaining_quantity} Left` 
          : "Out of Stock"}
      </div>

      {/* Hover overlay effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
        opacity: hoveredCard === product.product_id ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
      }} />

      {/* CSS animation for spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Separate component for Product Info (dependent on product data)
function ProductInfo({ product, hoveredButton, setHoveredButton }) {
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

  const productMetaStyle = {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    fontSize: "0.8125rem",
    color: "#64748b",
  };

  const metaItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.875rem 1.5rem",
    background: hoveredButton === product.product_id
      ? "linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #db2777 100%)"
      : product.product_remaining_quantity > 0
        ? "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)"
        : "linear-gradient(135deg, #94a3b8 0%, #64748b 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "0.9375rem",
    fontWeight: "600",
    cursor: product.product_remaining_quantity > 0 ? "pointer" : "not-allowed",
    transition: "all 0.3s ease",
    boxShadow: hoveredButton === product.product_id
      ? "0 10px 15px -3px rgba(79, 70, 229, 0.4)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transform: hoveredButton === product.product_id && product.product_remaining_quantity > 0 
      ? "scale(1.02)" 
      : "scale(1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    marginTop: "auto",
    opacity: product.product_remaining_quantity > 0 ? 1 : 0.7,
  };

  const handleOrder = () => {
    if (product.product_remaining_quantity > 0) {
      alert(`Ordering ${product.product_name}!`);
    }
  };

  return (
    <div style={cardContentStyle}>
      {/* Product Name and Price */}
      <div style={productHeaderStyle}>
        <h3 style={productNameStyle}>{product.product_name}</h3>
        <div style={priceTagStyle}>
          ${typeof product.product_price === 'number' 
            ? product.product_price.toFixed(2) 
            : product.product_price}
        </div>
      </div>

      {/* Description */}
      <p style={productDescriptionStyle}>{product.product_description}</p>

      {/* Product Meta Information */}
      <div style={productMetaStyle}>
        <div style={metaItemStyle}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
          </svg>
          <span>Qty: {product.product_quantity}</span>
        </div>
        <div style={metaItemStyle}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          <span>Sold: {product.product_quantity_sold || 0}</span>
        </div>
      </div>

      {/* Order Button */}
      <button
        style={buttonStyle}
        onMouseEnter={() => setHoveredButton(product.product_id)}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={handleOrder}
        disabled={product.product_remaining_quantity === 0}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {product.product_remaining_quantity > 0 ? "Order Now" : "Out of Stock"}
      </button>
    </div>
  );
}

// Main ProductList Component
export default function ProductList() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products with images from backend
  useEffect(() => {
    axios.get("http://localhost:3000/products-with-images")
      .then((response) => {
        // Group products by product_id to handle multiple images per product
        const groupedProducts = response.data.reduce((acc, item) => {
          const existingProduct = acc.find(p => p.product_id === item.product_id);
          if (existingProduct) {
            // If product already exists, just keep the first image
            return acc;
          }
          acc.push(item);
          return acc;
        }, []);
        
        setProducts(groupedProducts);
        setLoading(false);
        console.log("Products loaded:", groupedProducts);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
        setError("Failed to load products. Make sure the backend server is running.");
        setLoading(false);
      });
  }, []);

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

  const loadingStyle = {
    textAlign: "center",
    padding: "3rem",
    fontSize: "1.125rem",
    color: "#64748b",
  };

  const errorStyle = {
    textAlign: "center",
    padding: "3rem",
    fontSize: "1.125rem",
    color: "#ef4444",
    background: "#fef2f2",
    borderRadius: "12px",
    margin: "2rem auto",
    maxWidth: "600px",
    border: "1px solid #fecaca",
  };

  // Loading state
  if (loading) {
    return (
      <div style={loadingStyle}>
        <div style={{
          width: "50px",
          height: "50px",
          border: "5px solid #e2e8f0",
          borderTop: "5px solid #4f46e5",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto 1rem",
        }} />
        Loading products...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div style={errorStyle}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" style={{margin: "0 auto 1rem"}}>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <div style={{fontWeight: "600", marginBottom: "0.5rem"}}>Error Loading Products</div>
        <div style={{fontSize: "0.875rem"}}>{error}</div>
      </div>
    );
  }

  // No products state
  if (products.length === 0) {
    return (
      <div style={loadingStyle}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" style={{margin: "0 auto 1rem"}}>
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        No products available
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {products.map((product, index) => (
        <div
          key={product.product_id}
          style={cardStyle(product.product_id)}
          onMouseEnter={() => setHoveredCard(product.product_id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Product Image Component - Dependent on product data */}
          <ProductImage 
            product={product} 
            index={index} 
            hoveredCard={hoveredCard}
          />

          {/* Product Info Component - Dependent on product data */}
          <ProductInfo 
            product={product}
            hoveredButton={hoveredButton}
            setHoveredButton={setHoveredButton}
          />

          {/* Decorative bottom line on hover */}
          <div style={decorativeLineStyle(product.product_id)} />
        </div>
      ))}
    </div>
  );
}