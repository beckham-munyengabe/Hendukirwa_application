export default function EarningsWidget({ earnings }) {
  return (
    <div style={{
      background: "#e8f5e9",
      padding: "1rem",
      borderRadius: "6px",
      marginBottom: "1rem"
    }}>
      <h3 style={{ color: "#43A047", marginBottom: "0.5rem" }}>Earnings Summary</h3>
      <p>Weekly: ${earnings.weekly}</p>
      <p>Monthly: ${earnings.monthly}</p>
    </div>
  );
}
