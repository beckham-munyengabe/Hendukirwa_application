import SellerSidebar from "../components/SellerSidebar";
import { useState } from "react";

// Modern Icon Suite
const Icons = {
  Search: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Filter: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>,
  Download: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  More: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
};

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: "ORD-7291", customer: "Alice Freeman", email: "alice@example.com", product: "Handmade Basket", qty: 2, status: "Pending", payment: "Paid", total: 50.00, date: "Oct 24, 2025" },
    { id: "ORD-8820", customer: "John Kessler", email: "j.kessler@web.com", product: "Organic Coffee", qty: 1, status: "Shipped", payment: "Paid", total: 15.50, date: "Oct 23, 2025" },
    { id: "ORD-9912", customer: "Sarah Jenkins", email: "s.jenks@mail.com", product: "Clay Vase", qty: 1, status: "Delivered", payment: "Paid", total: 120.00, date: "Oct 22, 2025" },
  ]);

  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const toggleSelect = (id) => {
    setSelectedOrders(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return { bg: "#FEF3C7", text: "#92400E" };
      case "Shipped": return { bg: "#DBEAFE", text: "#1E40AF" };
      case "Delivered": return { bg: "#DCFCE7", text: "#166534" };
      case "Cancelled": return { bg: "#FEE2E2", text: "#991B1B" };
      default: return { bg: "#F1F5F9", text: "#475569" };
    }
  };

  const filteredOrders = orders.filter(o => {
    const matchesTab = activeTab === "All" || o.status === activeTab;
    const matchesSearch = o.customer.toLowerCase().includes(searchQuery.toLowerCase()) || o.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .tab-btn { padding: 10px 20px; font-size: 14px; font-weight: 600; border: none; background: none; cursor: pointer; color: #64748B; border-bottom: 2px solid transparent; transition: 0.2s; }
        .tab-btn.active { color: #6366F1; border-bottom-color: #6366F1; }
        .order-row { transition: 0.2s; }
        .order-row:hover { background: #F8FAFC; }
        .checkbox-custom { width: 18px; height: 18px; border-radius: 5px; border: 2px solid #CBD5E1; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .checkbox-active { background: #6366F1; border-color: #6366F1; }
        .stat-card { background: white; padding: 20px; border-radius: 16px; border: 1px solid #E2E8F0; flex: 1; }
      `}</style>

      <SellerSidebar />

      <main style={{ flex: 1, padding: "40px 60px" }}>
        
        {/* Analytics Summary */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div className="stat-card">
                <p style={{ margin: 0, fontSize: "12px", color: "#64748B", fontWeight: "700" }}>TOTAL ORDERS</p>
                <h2 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "800" }}>{orders.length}</h2>
            </div>
            <div className="stat-card">
                <p style={{ margin: 0, fontSize: "12px", color: "#64748B", fontWeight: "700" }}>PENDING</p>
                <h2 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "800", color: "#B45309" }}>{orders.filter(o => o.status === "Pending").length}</h2>
            </div>
            <div className="stat-card">
                <p style={{ margin: 0, fontSize: "12px", color: "#64748B", fontWeight: "700" }}>REVENUE</p>
                <h2 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "800" }}>$4,250.00</h2>
            </div>
            <div className="stat-card" style={{ background: "#6366F1", borderColor: "#6366F1" }}>
                <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: "700" }}>AVERAGE VALUE</p>
                <h2 style={{ margin: "8px 0 0", fontSize: "24px", fontWeight: "800", color: "white" }}>$34.20</h2>
            </div>
        </div>

        {/* Header Logic */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px" }}>
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "900", color: "#0F172A", margin: 0, letterSpacing: "-0.02em" }}>Order Management</h1>
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              {["All", "Pending", "Shipped", "Delivered"].map(tab => (
                <button key={tab} className={`tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
              ))}
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
               <span style={{ position: "absolute", left: "12px", color: "#94A3B8" }}><Icons.Search /></span>
               <input 
                placeholder="Search customers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: "12px 16px 12px 38px", borderRadius: "12px", border: "1px solid #E2E8F0", fontSize: "14px", width: "280px", outline: "none", transition: "0.2s" }} 
               />
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: "8px", background: "white", color: "#0F172A", border: "1px solid #E2E8F0", padding: "12px 20px", borderRadius: "12px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}>
              <Icons.Download /> Export
            </button>
          </div>
        </div>

        {/* Table Logic */}
        <div style={{ background: "white", borderRadius: "20px", border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
                <th style={{ ...thStyle, width: "40px" }}>
                    <div className="checkbox-custom" onClick={() => setSelectedOrders(selectedOrders.length === orders.length ? [] : orders.map(o => o.id))} />
                </th>
                <th style={thStyle}>Order Detail</th>
                <th style={thStyle}>Customer</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Total</th>
                <th style={{ ...thStyle, textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? filteredOrders.map((o) => (
                <tr key={o.id} className="order-row" style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={tdStyle}>
                    <div className={`checkbox-custom ${selectedOrders.includes(o.id) ? 'checkbox-active' : ''}`} onClick={() => toggleSelect(o.id)}>
                        {selectedOrders.includes(o.id) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>}
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ fontWeight: "800", color: "#0F172A", fontSize: "14px" }}>{o.id}</div>
                    <div style={{ color: "#64748B", fontSize: "12px", marginTop: "2px" }}>{o.product} • {o.qty}x</div>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ fontWeight: "600", color: "#1E293B", fontSize: "14px" }}>{o.customer}</div>
                    <div style={{ color: "#94A3B8", fontSize: "12px" }}>{o.email}</div>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ color: "#64748B", fontSize: "13px" }}>{o.date}</div>
                  </td>
                  <td style={tdStyle}>
                    <span style={{ 
                      padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.02em",
                      background: getStatusColor(o.status).bg, color: getStatusColor(o.status).text 
                    }}>
                      {o.status}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ fontWeight: "800", color: "#0F172A" }}>${o.total.toFixed(2)}</div>
                    <div style={{ color: "#10B981", fontSize: "10px", fontWeight: "700" }}>{o.payment}</div>
                  </td>
                  <td style={{ ...tdStyle, textAlign: "right" }}>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                      {o.status === "Pending" && (
                        <button onClick={() => updateOrderStatus(o.id, "Shipped")} style={{ background: "#6366F1", color: "white", border: "none", padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>Ship Order</button>
                      )}
                      <button style={{ background: "none", border: "1px solid #E2E8F0", color: "#64748B", padding: "6px", borderRadius: "8px", cursor: "pointer" }}><Icons.More /></button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="7" style={{ padding: "60px", textAlign: "center", color: "#94A3B8" }}>
                    <div style={{ fontSize: "40px", marginBottom: "10px" }}>📦</div>
                    <p style={{ fontWeight: "600", margin: 0 }}>No orders found matching your criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

const thStyle = { padding: "16px 24px", fontSize: "11px", fontWeight: "800", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" };
const tdStyle = { padding: "16px 24px" };