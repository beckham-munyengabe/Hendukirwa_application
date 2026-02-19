import SellerSidebar from "../components/SellerSidebar";
import Photo from "../../images/raphinha.jpg";
import { useState } from "react";

/* ================= ICONS ================= */

const Icons = {
  User: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Bell: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  Edit: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
    </svg>
  ),
  Save: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  )
};

/* ================= COMPONENT ================= */

export default function Profile() {

  const [activeTab, setActiveTab] = useState("security");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [profile] = useState({
    storeName: "Kigali Tech Hub",
    username: "@kigalitech_official"
  });

  const [sellerInfo, setSellerInfo] = useState({
    firstName: "Jean",
    lastName: "Mukamana",
    password: "12345678",
    email: "seller@kigalitech.rw",
    phone: "+250 788 000 000",
    address: "Kigali, Rwanda"
  });

  const handleSellerChange = (e) => {
    const { name, value } = e.target;
    setSellerInfo(prev => ({ ...prev, [name]: value }));
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
    background: activeTab === id ? "#fff" : "transparent",
    color: activeTab === id ? "#6366f1" : "#8E9EB3",
    boxShadow: activeTab === id ? "0 10px 25px -5px rgba(0,0,0,0.08)" : "none",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFC" }}>
      
      <SellerSidebar />

      <main style={{ flex: 1, padding: "40px", position: "relative" }}>
        <div style={glassCard}>

          {/* HEADER */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <div>
              <h1 style={{ fontSize: "2rem", fontWeight: "900", margin: 0 }}>
                {profile.storeName}
              </h1>
              <p style={{ color: "#94A3B8" }}>{profile.username}</p>
            </div>

            <button
              onClick={() => setShowProfileModal(true)}
              style={headerButton}
            >
              Open User Profile
            </button>
          </div>

          {/* TABS */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "40px" }}>
            <div onClick={() => setActiveTab("security")} style={tabStyle("security")}>
              <Icons.Shield /> Security
            </div>
            <div onClick={() => setActiveTab("notifications")} style={tabStyle("notifications")}>
              <Icons.Bell /> Notifications
            </div>
          </div>

          {activeTab === "security" && (
            <div>
              <h3 style={{ fontWeight: "800" }}>Security Settings</h3>
              <p style={{ color: "#64748b" }}>Manage authentication and protection.</p>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h3 style={{ fontWeight: "800" }}>Notifications</h3>
              <p style={{ color: "#64748b" }}>Manage your notification preferences.</p>
            </div>
          )}

        </div>
      </main>

      {/* PROFILE MODAL */}
      {showProfileModal && (
        <div style={overlayStyle} onClick={() => setShowProfileModal(false)}>
          
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>

            {/* Top Right Icons */}
            <div style={{ position: "absolute", top: "20px", right: "25px", display: "flex", gap: "15px" }}>
              
              <div onClick={() => setIsEditing(!isEditing)} style={{ cursor: "pointer" }}>
                {isEditing ? <Icons.Save /> : <Icons.Edit />}
              </div>

              <div
                onClick={() => {
                  setShowProfileModal(false);
                  setIsEditing(false);
                }}
                style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold", color: "#94A3B8" }}
              >
                ✕
              </div>
            </div>

            {/* IMAGE AVATAR */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
              <img
                src={Photo}
                alt="Profile"
                style={imageAvatarStyle}
              />
            </div>

            {/* Inputs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {Object.entries(sellerInfo).map(([key, value]) => (
                <div key={key}>
                  <label style={labelStyle}>
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    name={key}
                    type={key === "password" ? "password" : "text"}
                    value={value}
                    onChange={handleSellerChange}
                    readOnly={!isEditing}
                    style={inputStyle}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const glassCard = {
  background: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(40px)",
  borderRadius: "40px",
  padding: "54px"
};

const headerButton = {
  background: "#0f172a",
  color: "white",
  border: "none",
  padding: "10px 24px",
  borderRadius: "14px",
  fontWeight: "700",
  cursor: "pointer"
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(15,23,42,0.4)",
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
};

const modalStyle = {
  width: "480px",
  background: "white",
  borderRadius: "30px",
  padding: "50px 40px 40px",
  position: "relative",
  boxShadow: "0 40px 80px rgba(0,0,0,0.15)"
};

/* 🔥 UPDATED IMAGE AVATAR STYLE */
const imageAvatarStyle = {
  width: "110px",
  height: "110px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #f1f5f9",
  boxShadow: "0 15px 35px rgba(0,0,0,0.12)"
};

const labelStyle = {
  fontSize: "10px",
  fontWeight: "900",
  color: "#94a3b8",
  textTransform: "uppercase",
  marginBottom: "8px",
  display: "block"
};

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: "14px",
  border: "1.5px solid #F1F5F9",
  fontSize: "0.9rem"
};
