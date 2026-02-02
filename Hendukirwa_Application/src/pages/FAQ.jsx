import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BuyerFAQ() {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How do I place an order?", answer: "Browse products, click 'Order Now,' and fill in your details. It's that simple!" },
    { question: "Do I need an account to buy?", answer: "No — Hendukirwa is guest‑friendly. You can order without logging in for a faster experience." },
    { question: "How can I track my order?", answer: "Go to the Track Order page and enter your order ID or email address to see real-time updates." },
    { question: "What payment methods are accepted?", answer: "Currently: cash on delivery and mobile money. We are working on adding more secure payment options soon." },
    { question: "How long does delivery take?", answer: "Typically 2–5 business days depending on your location and the seller's processing time." },
    { question: "Can I cancel or change my order?", answer: "Yes, please contact our support team immediately before your order is marked as shipped." },
    { question: "What happens if a product is out of stock?", answer: "The product will be marked unavailable. You can check back later or contact the seller for restocking info." },
    { question: "Is my data safe when I order?", answer: "Absolutely. We use industry-standard encryption to ensure your personal information is handled securely." },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // --- Styles ---
  const pageStyle = { minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8fafc" };
  
  const headerStyle = {
    position: "relative",
    padding: "8rem 2rem 6rem",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    overflow: "hidden",
  };

  const headerDecorativeStyle = {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    opacity: 0.1,
    background: "radial-gradient(circle at 20% 50%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 80% 50%, #ec4899 0%, transparent 50%)",
  };

  const searchContainerStyle = {
    maxWidth: "600px",
    margin: "-2rem auto 3rem",
    position: "relative",
    zIndex: 10,
    padding: "0 1.5rem"
  };

  const inputStyle = {
    width: "100%",
    padding: "1.25rem 1.5rem 1.25rem 3.5rem",
    fontSize: "1.1rem",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    outline: "none",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  const faqCardStyle = (isOpen) => ({
    background: "#fff",
    borderRadius: "16px",
    marginBottom: "1rem",
    border: "1px solid #e2e8f0",
    overflow: "hidden",
    transition: "all 0.3s ease",
    boxShadow: isOpen ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none",
  });

  return (
    <div style={pageStyle}>
      <style>{`
        .search-wrapper svg { position: absolute; left: 2.75rem; top: 50%; transform: translateY(-50%); color: #94a3b8; }
        .faq-question:hover { background: #f1f5f9; }
        @media (max-width: 768px) { .header-title { font-size: 2.5rem !important; } }
      `}</style>

      <Navbar />

      <header style={headerStyle}>
        <div style={headerDecorativeStyle} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "800", color: "#fff", marginBottom: "1rem" }} className="header-title">
            Buyer FAQs
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#cbd5e1", lineHeight: "1.6" }}>
            Everything you need to know about shopping on Hendukirwa.
          </p>
        </div>
      </header>

      <main style={{ flexGrow: 1, width: "100%", maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
        
        {/* Search Bar */}
        <div style={searchContainerStyle} className="search-wrapper">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            style={inputStyle}
            type="text"
            placeholder="Search for answers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div style={{ marginTop: "2rem" }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} style={faqCardStyle(isOpen)}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="faq-question"
                    style={{
                      width: "100%",
                      padding: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "0.2s"
                    }}
                  >
                    <span style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1e293b" }}>
                      {faq.question}
                    </span>
                    <svg 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  
                  {isOpen && (
                    <div style={{ padding: "0 1.5rem 1.5rem", color: "#475569", lineHeight: "1.7", fontSize: "1.05rem" }}>
                      <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1rem" }}>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: "center", padding: "4rem 2rem", background: "#fff", borderRadius: "20px", border: "1px dashed #cbd5e1" }}>
              <p style={{ color: "#64748b", fontSize: "1.1rem" }}>
                No matching questions found for "<strong>{search}</strong>"
              </p>
              <button 
                onClick={() => setSearch("")}
                style={{ marginTop: "1rem", color: "#4f46e5", fontWeight: "600", background: "none", border: "none", cursor: "pointer" }}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}