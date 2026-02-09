import SellerSidebar from "../components/SellerSidebar";
import { useState } from "react";

// Professional Icon Set
const Icons = {
  Wallet: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.33" /><path d="M16 12h5" /></svg>,
  TrendingUp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  Download: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>,
  Clock: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
};

export default function Earnings() {
  const [balance, setBalance] = useState(1240.50);
  const [transactions] = useState([
    { id: "TXN-9021", date: "Jan 24", amount: 45.00, status: "Cleared", type: "Sale" },
    { id: "TXN-8842", date: "Jan 22", amount: 120.00, status: "Processing", type: "Sale" },
    { id: "TXN-7710", date: "Jan 18", amount: -500.00, status: "Completed", type: "Withdrawal" },
  ]);

  // Styles
  const cardStyle = {
    background: "#fff",
    borderRadius: "24px",
    padding: "24px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)"
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFC" }}>
      <style>{`
        .btn-withdraw { background: #6366f1; color: white; border: none; padding: 12px 24px; border-radius: 14px; font-weight: 700; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 8px; }
        .btn-withdraw:hover { background: #4f46e5; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2); }
        .txn-row:hover { background: #fcfcfd; }
      `}</style>
      
      <SellerSidebar />
      
      <main style={{ flex: 1, padding: "3rem 4rem", maxWidth: "1200px" }}>
        {/* Header Section */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
          <div>
            <h1 style={{ fontSize: "2rem", fontWeight: "900", color: "#0f172a", letterSpacing: "-0.04em" }}>Finance</h1>
            <p style={{ color: "#64748b", fontWeight: "500" }}>Manage your revenue, taxes, and payouts.</p>
          </div>
          <button className="btn-withdraw">
            <Icons.Wallet /> Withdraw Balance
          </button>
        </header>

        {/* Bento Grid Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "20px", marginBottom: "2rem" }}>
          <div style={{ ...cardStyle, background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "white" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", opacity: 0.7, textTransform: "uppercase" }}>Available to Withdraw</span>
            <h2 style={{ fontSize: "3rem", fontWeight: "800", margin: "10px 0" }}>${balance.toLocaleString()}</h2>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
               <div>
                 <div style={{ fontSize: "0.7rem", opacity: 0.6 }}>PENDING CLEARANCE</div>
                 <div style={{ fontWeight: "700" }}>$420.00</div>
               </div>
               <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }}></div>
               <div>
                 <div style={{ fontSize: "0.7rem", opacity: 0.6 }}>NEXT PAYOUT</div>
                 <div style={{ fontWeight: "700" }}>Feb 01</div>
               </div>
            </div>
          </div>

          <div style={cardStyle}>
            <div style={{ background: "#f0fdf4", width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#15803d", marginBottom: "16px" }}>
              <Icons.TrendingUp />
            </div>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#64748b" }}>MONTHLY GROWTH</span>
            <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0f172a", marginTop: "8px" }}>+24.5%</div>
            <div style={{ fontSize: "0.8rem", color: "#10b981", fontWeight: "600", marginTop: "4px" }}>↑ $1,200 this month</div>
          </div>

          <div style={cardStyle}>
            <div style={{ background: "#eff6ff", width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d4ed8", marginBottom: "16px" }}>
              <Icons.Clock />
            </div>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#64748b" }}>AVG. PAYOUT TIME</span>
            <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0f172a", marginTop: "8px" }}>2.4 Days</div>
            <div style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: "600", marginTop: "4px" }}>Express enabled</div>
          </div>
        </div>

        {/* Transaction Ledger */}
        <div style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h3 style={{ fontWeight: "800", fontSize: "1.2rem", color: "#0f172a" }}>Recent Transactions</h3>
            <button style={{ background: "transparent", border: "1px solid #e2e8f0", padding: "8px 16px", borderRadius: "10px", fontSize: "0.8rem", fontWeight: "700", color: "#64748b", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
              <Icons.Download /> Download Statement
            </button>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Transaction ID</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Status</th>
                <th style={{ ...thStyle, textAlign: "right" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="txn-row" style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={tdStyle}>{t.date}</td>
                  <td style={{ ...tdStyle, fontWeight: "700", color: "#0f172a" }}>{t.id}</td>
                  <td style={tdStyle}>
                    <span style={{ color: t.type === "Withdrawal" ? "#ef4444" : "#64748b" }}>{t.type}</span>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: t.status === "Processing" ? "#fb923c" : "#10b981" }}></span>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>{t.status}</span>
                    </div>
                  </td>
                  <td style={{ ...tdStyle, textAlign: "right", fontWeight: "800", color: t.amount < 0 ? "#ef4444" : "#0f172a" }}>
                    {t.amount < 0 ? `-$${Math.abs(t.amount)}` : `+$${t.amount}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

const thStyle = { padding: "12px 16px", textAlign: "left", fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" };
const tdStyle = { padding: "18px 16px", fontSize: "0.9rem", color: "#475569" };