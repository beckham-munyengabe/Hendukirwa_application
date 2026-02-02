import SellerSidebar from "../components/SellerSidebar";
import ProductCard from "../components/ProductCard";
import { useState, useMemo } from "react";

// High-Design Icon Suite
const Icons = {
  Plus: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Upload: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Edit: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  Trash: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>,
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Eye: (props) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Alert: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
};

export default function MyProducts() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    id: null, name: "", price: "", stock: "", description: "", category: "", tags: "", images: [], status: "Active"
  });
  const [error, setError] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesTab = activeTab === "All" || p.status === activeTab;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [products, activeTab, searchQuery]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length !== 4) {
      setError("Exactly 4 high-quality images are required.");
      return;
    }
    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, images: imageURLs });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedData = {
      ...formData,
      id: formData.id || Date.now(),
      price: Number(formData.price),
      stock: Number(formData.stock),
      tags: typeof formData.tags === 'string' ? formData.tags.split(",").map(t => t.trim()) : formData.tags
    };
    setProducts(formData.id ? products.map(p => p.id === formData.id ? processedData : p) : [...products, processedData]);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ id: null, name: "", price: "", stock: "", description: "", category: "", tags: "", images: [], status: "Active" });
    setShowForm(false);
    setError("");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .drawer-overlay { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px); z-index: 100; display: flex; justify-content: flex-end; }
        .drawer-content { width: 480px; background: white; height: 100%; padding: 40px; box-shadow: -10px 0 40px rgba(0,0,0,0.15); overflow-y: auto; animation: slideIn 0.3s ease-out; }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        
        .input-field { width: 100%; padding: 14px 16px; border-radius: 12px; border: 1.5px solid #E2E8F0; font-size: 14px; transition: 0.2s; outline: none; }
        .input-field:focus { border-color: #000; box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05); }
        
        .btn-black { background: #000; color: #fff; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: 0.2s; }
        .btn-black:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); background: #1a1a1a; }
        
        .tab-btn { padding: 10px 20px; font-size: 14px; font-weight: 600; border: none; background: transparent; cursor: pointer; color: #64748B; transition: 0.2s; border-radius: 10px; }
        .tab-btn.active { color: #000; background: #F1F5F9; }
        
        .upload-zone { border: 2px dashed #E2E8F0; padding: 30px; border-radius: 16px; text-align: center; cursor: pointer; transition: 0.2s; }
        .upload-zone:hover { border-color: #000; background: #F8FAFC; }
      `}</style>

      <SellerSidebar />
      
      <main style={{ flex: 1, padding: "40px 60px" }}>
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "900", color: "#000", margin: 0, letterSpacing: "-0.04em" }}>Product Studio</h1>
            <p style={{ color: "#64748B", marginTop: "4px" }}>Manage your collection and track inventory.</p>
          </div>
          <button onClick={() => setShowForm(true)} className="btn-black">
            <Icons.Plus /> New Product
          </button>
        </div>

        {/* Toolbar */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            {["All", "Active", "Draft"].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`tab-btn ${activeTab === t ? 'active' : ''}`}>{t}</button>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }}><Icons.Search /></span>
            <input 
              className="input-field" 
              style={{ width: "320px", paddingLeft: "42px" }} 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <div key={p.id} style={{ background: "white", borderRadius: "24px", padding: "20px", border: "1px solid #E2E8F0" }}>
              <ProductCard product={p} />
              <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                <button 
                  onClick={() => { setFormData({...p, tags: p.tags.join(", ")}); setShowForm(true); }} 
                  style={{ flex: 1, background: "#000", color: "#fff", border: "none", padding: "12px", borderRadius: "12px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <Icons.Edit /> Edit
                </button>
                <button onClick={() => setProducts(products.filter(item => item.id !== p.id))} style={{ background: "#F1F5F9", border: "none", padding: "12px", borderRadius: "12px", color: "#EF4444", cursor: "pointer" }}>
                  <Icons.Trash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Form Drawer */}
        {showForm && (
          <div className="drawer-overlay" onClick={resetForm}>
            <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
              <h2 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "32px", letterSpacing: "-0.02em" }}>Product Details</h2>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontWeight: "800", color: "#94A3B8", textTransform: "uppercase", marginBottom: "12px", display: "block" }}>Basics</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <input name="name" className="input-field" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <textarea name="description" className="input-field" placeholder="Product story..." value={formData.description} onChange={handleChange} rows="4" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <input type="number" name="price" className="input-field" placeholder="Price ($)" value={formData.price} onChange={handleChange} required />
                  <input type="number" name="stock" className="input-field" placeholder="Inventory" value={formData.stock} onChange={handleChange} required />
                </div>

                <div>
                  <label style={{ fontSize: "11px", fontWeight: "800", color: "#94A3B8", textTransform: "uppercase", marginBottom: "12px", display: "block" }}>Media</label>
                  <label className="upload-zone" style={{ display: "block" }}>
                    <input type="file" multiple accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                    <Icons.Upload />
                    <div style={{ fontSize: "14px", fontWeight: "700", marginTop: "8px" }}>Upload Gallery</div>
                    <div style={{ fontSize: "12px", color: "#94A3B8" }}>4 images required</div>
                  </label>
                  {error && <p style={{ color: "#EF4444", fontSize: "12px", marginTop: "12px" }}>{error}</p>}
                </div>

                <div style={{ display: "flex", gap: "12px", marginTop: "auto", paddingTop: "40px" }}>
                  <button type="submit" className="btn-black" style={{ flex: 2, justifyContent: "center", height: "54px" }}>
                    Save Product
                  </button>
                  <button type="button" onClick={resetForm} style={{ flex: 1, background: "#fff", border: "1.5px solid #E2E8F0", borderRadius: "12px", fontWeight: "700", cursor: "pointer" }}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}