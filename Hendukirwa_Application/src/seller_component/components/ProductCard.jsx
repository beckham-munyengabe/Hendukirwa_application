export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "1rem",
        background: "#fff",
        width: "220px"
      }}
    >
      {/* Show first image as main */}
      {product.images && product.images.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.name}
          style={{ width: "100%", borderRadius: "4px", marginBottom: "0.5rem" }}
        />
      )}
      <h3 style={{ margin: "0.5rem 0" }}>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      {/* Thumbnails for other images */}
      <div style={{ display: "flex", gap: "0.25rem", marginTop: "0.5rem" }}>
        {product.images &&
          product.images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${product.name} ${i + 2}`}
              style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "4px" }}
            />
          ))}
      </div>
    </div>
  );
}
