import SellerSidebar from "../components/SellerSidebar";
import EarningsWidget from "../components/EarningsWidget";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function SellerDashboard() {
  const earnings = { weekly: 120, monthly: 560 };

  // Generate sample data
  const generateData = (days) =>
    Array.from({ length: days }, () => Math.floor(Math.random() * 90) + 10);

  const [range, setRange] = useState("monthly"); // weekly, monthly, custom
  const [customDays, setCustomDays] = useState(30);

  const getLabels = () => {
    if (range === "weekly") return Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
    if (range === "monthly") return Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
    return Array.from({ length: customDays }, (_, i) => `Day ${i + 1}`);
  };

  const getData = () => {
    if (range === "weekly") return generateData(7);
    if (range === "monthly") return generateData(30);
    return generateData(customDays);
  };

  const data = {
    labels: getLabels(),
    datasets: [
      {
        label: "Daily Purchases",
        data: getData(),
        borderColor: "#1E88E5",
        backgroundColor: "rgba(30, 136, 229, 0.3)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#1565C0",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Buyer Purchases Trend",
        font: { size: 22, weight: "bold" },
        color: "#1E88E5"
      },
      legend: {
        display: true,
        position: "top",
        labels: { color: "#333", font: { size: 14 } }
      },
      tooltip: {
        backgroundColor: "#1E88E5",
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 6
      }
    },
    scales: {
      x: {
        title: { display: true, text: "Day", color: "#333", font: { size: 14 } },
        grid: { color: "rgba(200,200,200,0.2)" }
      },
      y: {
        title: { display: true, text: "Number of Purchases", color: "#333", font: { size: 14 } },
        beginAtZero: true,
        grid: { color: "rgba(200,200,200,0.2)" }
      }
    }
  };

  return (
    <div>
      <div style={{ display: "flex", minHeight: "80vh" }}>
        <SellerSidebar />
        <main style={{ flex: 1, padding: "2rem" }}>
          <h1>Seller Dashboard Overview</h1>
          <EarningsWidget earnings={earnings} />

          {/* Analytics Section */}
          <h2 style={{ marginTop: "2rem" }}>Analytics</h2>

          {/* Filter Controls */}
          <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
            <button
              onClick={() => setRange("weekly")}
              style={{ background: "#1E88E5", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}
            >
              Weekly
            </button>
            <button
              onClick={() => setRange("monthly")}
              style={{ background: "#1E88E5", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}
            >
              Monthly
            </button>
            <div>
              <input
                type="number"
                value={customDays}
                onChange={(e) => setCustomDays(Number(e.target.value))}
                style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <button
                onClick={() => setRange("custom")}
                style={{ background: "#43A047", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px", marginLeft: "0.5rem" }}
              >
                Custom Range
              </button>
            </div>
          </div>

          {/* Chart */}
          <div style={{ height: "500px", background: "#fff", padding: "1rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <Line data={data} options={options} />
          </div>
        </main>
      </div>
    </div>
  );
}
