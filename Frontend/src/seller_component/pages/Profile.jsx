import SellerSidebar from "../components/SellerSidebar";
import { useState } from "react";

// Precise SVG Icons
const Icons = {
  User: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Shield: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Bell: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  Camera: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("general");
  const [isEditing, setIsEditing] = useState(false);

  // --- FIXED: Added the missing profile state ---
  const [profile, setProfile] = useState({
    storeName: "Kigali Tech Hub",
    username: "@kigalitech_official",
    email: "support@kigalitech.rw",
    bio: "Premium electronics and tech accessories delivered straight to your door across Rwanda.",
    twoFactor: true
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  // --- Styles ---
  const glassCard = {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(40px)",
    borderRadius: "40px",
    border: "1px solid rgba(255, 255, 255, 1)",
    boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0,0,0,0.02)",
    padding: "54px",
    maxWidth: "1050px",
    width: "100%",
    position: "relative",
    overflow: "hidden"
  };

  const tabStyle = (id) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 20px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: "700",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    background: activeTab === id ? "#fff" : "transparent",
    color: activeTab === id ? "#6366f1" : "#8E9EB3",
    boxShadow: activeTab === id ? "0 10px 25px -5px rgba(0,0,0,0.08)" : "none",
    transform: activeTab === id ? "scale(1.02)" : "scale(1)",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Inter', sans-serif", position: "relative", overflow: "hidden" }}>
      
      <style>{`
        .input-focus:focus { outline: none; border-color: #6366f1 !important; background: #fff !important; box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1); }
        .save-btn { background: #0f172a; color: white; border: none; padding: 12px 28px; border-radius: 14px; font-weight: 700; cursor: pointer; transition: 0.3s; font-size: 0.9rem; }
        .save-btn:hover { background: #6366f1; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(99, 102, 241, 0.15); }
        .edit-active { background: #6366f1 !important; }
        .toggle-track { width: 48px; height: 26px; border-radius: 20px; position: relative; cursor: pointer; transition: 0.4s; }
        .avatar-container { position: relative; transition: 0.4s ease; cursor: pointer; }
        .avatar-container:hover { transform: translateY(-4px); }
        .avatar-container:hover .camera-overlay { opacity: 1; }
        .stat-card { transition: 0.3s; border: 1px solid rgba(0,0,0,0.03); }
        .stat-card:hover { transform: translateY(-3px); background: #fff !important; box-shadow: 0 10px 20px rgba(0,0,0,0.02); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
      `}</style>

      {/* Decorative Background */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "400px", height: "400px", background: "rgba(99, 102, 241, 0.08)", borderRadius: "50%", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "10%", width: "300px", height: "300px", background: "rgba(168, 85, 247, 0.08)", borderRadius: "50%", filter: "blur(80px)" }} />

      <SellerSidebar />

      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "40px", zIndex: 1 }}>
        <div style={glassCard}>
          
          {/* Header & Avatar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
            <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
              <div className="avatar-container">
                <div style={{ width: "100px", height: "100px", background: "linear-gradient(135deg, #6366f1, #a855f7)", borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "36px", fontWeight: "900", boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.3)" }}>
                  {profile.storeName[0]}
                </div>
                <div className="camera-overlay" style={{ opacity: 0, position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.3s", backdropFilter: "blur(4px)" }}>
                  <Icons.Camera />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <h1 style={{ fontSize: "2.2rem", fontWeight: "900", color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>{profile.storeName}</h1>
                  <div style={{ background: "#EEF2FF", color: "#6366f1", padding: "6px 12px", borderRadius: "10px", fontSize: "0.65rem", fontWeight: "900", display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: 6, height: 6, background: "#6366f1", borderRadius: "50%" }} /> VERIFIED
                  </div>
                </div>
                <p style={{ color: "#94A3B8", margin: "6px 0", fontSize: "1.05rem", fontWeight: "500" }}>{profile.username}</p>
              </div>
            </div>
            <button 
              className={`save-btn ${isEditing ? 'edit-active' : ''}`} 
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Confirm Changes" : "Edit Profile"}
            </button>
          </div>

          {/* Tabs Navigation */}
          <div style={{ display: "flex", gap: "6px", background: "rgba(0,0,0,0.04)", padding: "6px", borderRadius: "18px", width: "fit-content", marginBottom: "44px" }}>
            <div onClick={() => setActiveTab("general")} style={tabStyle("general")}><Icons.User /> General</div>
            <div onClick={() => setActiveTab("security")} style={tabStyle("security")}><Icons.Shield /> Security</div>
            <div onClick={() => setActiveTab("notifications")} style={tabStyle("notifications")}><Icons.Bell /> Notifications</div>
          </div>

          {/* Tab Content: General */}
          {activeTab === "general" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", animation: "fadeIn 0.4s ease-out" }}>
              <div style={inputContainer}>
                <label style={labelStyle}>Legal Store Name</label>
                <input 
                  name="storeName"
                  style={inputStyle} 
                  value={profile.storeName} 
                  onChange={handleChange}
                  className="input-focus" 
                  readOnly={!isEditing} 
                />
              </div>
              <div style={inputContainer}>
                <label style={labelStyle}>Support Email</label>
                <input 
                  name="email"
                  style={inputStyle} 
                  value={profile.email} 
                  onChange={handleChange}
                  className="input-focus" 
                  readOnly={!isEditing} 
                />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label style={labelStyle}>Store Bio</label>
                <textarea 
                  name="bio"
                  style={{ ...inputStyle, height: "120px", resize: "none", lineHeight: "1.6" }} 
                  value={profile.bio} 
                  onChange={handleChange}
                  className="input-focus" 
                  readOnly={!isEditing}
                />
              </div>
            </div>
          )}

          {/* Tab Content: Security */}
          {activeTab === "security" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", animation: "fadeIn 0.4s ease-out" }}>
              <div style={{ background: "rgba(255,255,255,0.6)", padding: "28px", borderRadius: "24px", border: "1px solid rgba(0,0,0,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: "800", color: "#0f172a", fontSize: "1rem" }}>Two-Factor Authentication</div>
                  <div style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "4px" }}>Your account is currently protected by 2FA.</div>
                </div>
                <div 
                  className="toggle-track" 
                  style={{ background: profile.twoFactor ? "#10b981" : "#cbd5e1" }}
                  onClick={() => isEditing && setProfile({...profile, twoFactor: !profile.twoFactor})}
                >
                  <div style={{ width: "20px", height: "20px", background: "white", borderRadius: "50%", position: "absolute", top: "3px", left: profile.twoFactor ? "25px" : "3px", transition: "0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }} />
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.6)", padding: "28px", borderRadius: "24px", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>Security Logs</div>
                <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "20px" }}>Last login: Today from Kigali, Rwanda</div>
                <button style={{ background: "#fff", border: "1px solid #E2E8F0", padding: "10px 20px", borderRadius: "12px", fontWeight: "700", color: "#475569", cursor: "pointer", transition: "0.2s" }}>Request Reset Link</button>
              </div>
            </div>
          )}

          {/* Stats Footer */}
          <div style={{ marginTop: "56px", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "28px" }}>
            <div className="stat-card" style={miniCard}>
              <span style={labelStyle}>Market Tier</span>
              <div style={{ fontWeight: "900", color: "#0f172a", fontSize: "1.1rem" }}>Gold Merchant</div>
            </div>
            <div className="stat-card" style={miniCard}>
              <span style={labelStyle}>Trust Score</span>
              <div style={{ fontWeight: "900", color: "#10b981", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "6px" }}>
                98.4 <span style={{fontSize: "0.7rem", color: "#94A3B8"}}>/ 100</span>
              </div>
            </div>
            <div className="stat-card" style={miniCard}>
              <span style={labelStyle}>Store Status</span>
              <div style={{ fontWeight: "900", color: "#10b981", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: 8, height: 8, background: "#10b981", borderRadius: "50%", animation: "pulse 2s infinite" }} /> Online
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// Helpers
const inputContainer = { marginBottom: "0px" };
const labelStyle = { display: "block", fontSize: "10px", fontWeight: "900", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "10px" };
const inputStyle = { width: "100%", padding: "16px 20px", borderRadius: "16px", border: "1.5px solid #F1F5F9", background: "rgba(248,250,252,0.8)", fontSize: "0.95rem", fontWeight: "600", color: "#1e293b", transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)" };
const miniCard = { background: "rgba(0,0,0,0.025)", padding: "20px 24px", borderRadius: "24px" };