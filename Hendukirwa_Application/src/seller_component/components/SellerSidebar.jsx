import { Link, useLocation } from "react-router-dom";

// Standard SVG Icon Set for a Professional Look
const Icons = {
  Products: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
  Orders: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  Earnings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  Messages: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>,
  Profile: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
};

export default function SellerSidebar() {
  const location = useLocation();

  const navItemStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: isActive ? "#fff" : "#64748b",
      textDecoration: "none",
      padding: "10px 16px",
      borderRadius: "14px",
      fontSize: "0.9rem",
      fontWeight: "600",
      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      background: isActive ? "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.05) 100%)" : "transparent",
      border: isActive ? "1px solid rgba(99, 102, 241, 0.3)" : "1px solid transparent",
      position: "relative",
      overflow: "hidden"
    };
  };

  return (
    <aside style={{
      width: "280px",
      background: "#020617",
      color: "#f8fafc",
      padding: "2rem 1.25rem",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #1e293b",
      boxShadow: "10px 0 30px rgba(0,0,0,0.2)"
    }}>
      <style>{`
        .nav-link:hover { color: #fff !important; background: rgba(255,255,255,0.04) !important; }
        .nav-link:hover svg { transform: scale(1.1); color: #818cf8; }
        .pulse-dot { width: 6px; height: 6px; background: #818cf8; border-radius: 50%; position: absolute; right: 16px; box-shadow: 0 0 10px #6366f1; }
        .active-indicator { position: absolute; left: 0; width: 3px; height: 20px; background: #6366f1; border-radius: 0 4px 4px 0; box-shadow: 2px 0 10px #6366f1; }
      `}</style>

      {/* Brand Section */}
      <div style={{ padding: "0 12px", marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "36px", height: "36px", background: "#6366f1", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "900", letterSpacing: "-0.04em", margin: 0 }}>ZENITH</h2>
        </div>
      </div>

      {/* Main Nav */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        
        {/* Marketplace Section */}
        <div>
          <label style={{ fontSize: "0.65rem", fontWeight: "800", color: "#475569", textTransform: "uppercase", letterSpacing: "0.15em", marginLeft: "16px", marginBottom: "12px", display: "block" }}>Management</label>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Link to="/seller/products" className="nav-link" style={navItemStyle("/seller/products")}>
              {location.pathname === "/seller/products" && <span className="active-indicator" />}
              <Icons.Products /> My Products
            </Link>
            <Link to="/seller/orders" className="nav-link" style={navItemStyle("/seller/orders")}>
              {location.pathname === "/seller/orders" && <span className="active-indicator" />}
              <Icons.Orders /> Orders
            </Link>
            <Link to="/seller/earnings" className="nav-link" style={navItemStyle("/seller/earnings")}>
              {location.pathname === "/seller/earnings" && <span className="active-indicator" />}
              <Icons.Earnings /> Earnings
            </Link>
          </nav>
        </div>

        {/* Support Section */}
        <div>
          <label style={{ fontSize: "0.65rem", fontWeight: "800", color: "#475569", textTransform: "uppercase", letterSpacing: "0.15em", marginLeft: "16px", marginBottom: "12px", display: "block" }}>Connectivity</label>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Link to="/seller/messages" className="nav-link" style={navItemStyle("/seller/messages")}>
              {location.pathname === "/seller/messages" && <span className="active-indicator" />}
              <Icons.Messages /> Messages
              <span className="pulse-dot"></span>
            </Link>
            <Link to="/seller/profile" className="nav-link" style={navItemStyle("/seller/profile")}>
              {location.pathname === "/seller/profile" && <span className="active-indicator" />}
              <Icons.Profile /> Profile
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Identity Card */}
      <div style={{ marginTop: "auto", background: "rgba(30, 41, 59, 0.5)", border: "1px solid rgba(255,255,255,0.05)", padding: "16px", borderRadius: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <img 
            src="https://ui-avatars.com/api/?name=Hendukirwa+Crafts&background=6366f1&color=fff" 
            alt="Avatar" 
            style={{ width: "38px", height: "38px", borderRadius: "10px" }} 
          />
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: "700" }}>Hendukirwa</div>
            <div style={{ fontSize: "0.7rem", color: "#6366f1", fontWeight: "700" }}>Verified Partner</div>
          </div>
        </div>
        
        {/* Progress Bar for Store Rating */}
        <div style={{ background: "#0f172a", height: "6px", borderRadius: "10px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "85%", background: "linear-gradient(90deg, #6366f1, #a855f7)", borderRadius: "10px" }}></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "0.65rem", color: "#475569", fontWeight: "700" }}>
          <span>STORE HEALTH</span>
          <span style={{ color: "#f8fafc" }}>85%</span>
        </div>
      </div>
    </aside>
  );
}