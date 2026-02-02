import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const footerStyle = {
    background: "linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)",
    color: "#e2e8f0",
    padding: "4rem 0 2rem",
    marginTop: "6rem",
    position: "relative",
  };

  const decorativeTopStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "linear-gradient(90deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "3rem",
    marginBottom: "3rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.125rem",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const brandingStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  };

  const logoIconStyle = {
    width: "40px",
    height: "40px",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.25rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
  };

  const logoTextStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  };

  const descriptionStyle = {
    color: "#94a3b8",
    lineHeight: "1.6",
    fontSize: "0.9375rem",
  };

  const linkListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  };

  const linkItemStyle = {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "0.9375rem",
    transition: "all 0.2s ease",
    display: "inline-block",
  };

  const contactInfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    color: "#cbd5e1",
    fontSize: "0.9375rem",
    lineHeight: "1.6",
  };

  const iconStyle = {
    marginTop: "0.125rem",
    flexShrink: 0,
  };

  const newsletterFormStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const inputStyle = {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "rgba(30, 41, 59, 0.5)",
    color: "#fff",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const subscribeButtonStyle = {
    padding: "0.75rem 1.5rem",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.9375rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
  };

  const dividerStyle = {
    height: "1px",
    background: "linear-gradient(to right, transparent, #334155, transparent)",
    margin: "2rem 0",
  };

  const bottomSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
  };

  const socialLinksStyle = {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
  };

  const socialIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#cbd5e1",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const legalLinksStyle = {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const legalLinkStyle = {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.875rem",
    transition: "all 0.2s ease",
  };

  const copyrightStyle = {
    color: "#64748b",
    fontSize: "0.875rem",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <div style={decorativeTopStyle} />
      
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Branding */}
          <div style={brandingStyle}>
            <div style={logoStyle}>
              <div style={logoIconStyle}>H</div>
              <div>
                <div style={logoTextStyle}>Hendukirwa</div>
                <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Marketplace</div>
              </div>
            </div>
            <p style={descriptionStyle}>
              Connecting local sellers with buyers — simple, secure, guest‑friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={sectionTitleStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              Quick Links
            </h3>
            <ul style={linkListStyle}>
              <li>
                <a
                  href="/"
                  style={{
                    ...linkItemStyle,
                    color: hoveredLink === "home" ? "#4f46e5" : "#cbd5e1",
                    paddingLeft: hoveredLink === "home" ? "0.5rem" : "0",
                  }}
                  onMouseEnter={() => setHoveredLink("home")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  style={{
                    ...linkItemStyle,
                    color: hoveredLink === "products" ? "#4f46e5" : "#cbd5e1",
                    paddingLeft: hoveredLink === "products" ? "0.5rem" : "0",
                  }}
                  onMouseEnter={() => setHoveredLink("products")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  style={{
                    ...linkItemStyle,
                    color: hoveredLink === "track" ? "#4f46e5" : "#cbd5e1",
                    paddingLeft: hoveredLink === "track" ? "0.5rem" : "0",
                  }}
                  onMouseEnter={() => setHoveredLink("track")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{
                    ...linkItemStyle,
                    color: hoveredLink === "about" ? "#4f46e5" : "#cbd5e1",
                    paddingLeft: hoveredLink === "about" ? "0.5rem" : "0",
                  }}
                  onMouseEnter={() => setHoveredLink("about")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{
                    ...linkItemStyle,
                    color: hoveredLink === "contact" ? "#4f46e5" : "#cbd5e1",
                    paddingLeft: hoveredLink === "contact" ? "0.5rem" : "0",
                  }}
                  onMouseEnter={() => setHoveredLink("contact")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  style={{
                    ...linkItemStyle,
                    color: hoveredLink === "faq" ? "#4f46e5" : "#cbd5e1",
                    paddingLeft: hoveredLink === "faq" ? "0.5rem" : "0",
                  }}
                  onMouseEnter={() => setHoveredLink("faq")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={sectionTitleStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Contact
            </h3>
            <div style={contactInfoStyle}>
              <div style={contactItemStyle}>
                <svg style={iconStyle} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>support@hendukirwa.com</span>
              </div>
              <div style={contactItemStyle}>
                <svg style={iconStyle} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+250 788 123 456</span>
              </div>
              <div style={contactItemStyle}>
                <svg style={iconStyle} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Kigali, Rwanda</span>
              </div>
              <div style={contactItemStyle}>
                <svg style={iconStyle} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Mon–Fri, 9am–6pm</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={sectionTitleStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Newsletter
            </h3>
            <p style={descriptionStyle}>Stay updated with our latest offers and news.</p>
            <form
              style={newsletterFormStyle}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
                setEmail("");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#4f46e5";
                  e.target.style.background = "rgba(30, 41, 59, 0.8)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#334155";
                  e.target.style.background = "rgba(30, 41, 59, 0.5)";
                }}
              />
              <button
                type="submit"
                style={subscribeButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 12px -1px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.3)";
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div style={dividerStyle} />

        {/* Social + Legal */}
        <div style={bottomSectionStyle}>
          <div style={socialLinksStyle}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialIconStyle,
                background: hoveredSocial === "facebook" ? "rgba(59, 89, 152, 0.2)" : "rgba(255, 255, 255, 0.05)",
                color: hoveredSocial === "facebook" ? "#3b5998" : "#cbd5e1",
                transform: hoveredSocial === "facebook" ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredSocial("facebook")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialIconStyle,
                background: hoveredSocial === "instagram" ? "rgba(225, 48, 108, 0.2)" : "rgba(255, 255, 255, 0.05)",
                color: hoveredSocial === "instagram" ? "#e1306c" : "#cbd5e1",
                transform: hoveredSocial === "instagram" ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredSocial("instagram")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialIconStyle,
                background: hoveredSocial === "twitter" ? "rgba(29, 161, 242, 0.2)" : "rgba(255, 255, 255, 0.05)",
                color: hoveredSocial === "twitter" ? "#1da1f2" : "#cbd5e1",
                transform: hoveredSocial === "twitter" ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredSocial("twitter")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/250788123456"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialIconStyle,
                background: hoveredSocial === "whatsapp" ? "rgba(37, 211, 102, 0.2)" : "rgba(255, 255, 255, 0.05)",
                color: hoveredSocial === "whatsapp" ? "#25d366" : "#cbd5e1",
                transform: hoveredSocial === "whatsapp" ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredSocial("whatsapp")}
              onMouseLeave={() => setHoveredSocial(null)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>

          <div style={legalLinksStyle}>
            <a
              href="/privacy"
              style={{
                ...legalLinkStyle,
                color: hoveredLink === "privacy" ? "#4f46e5" : "#94a3b8",
              }}
              onMouseEnter={() => setHoveredLink("privacy")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Privacy Policy
            </a>
            <span style={{ color: "#475569" }}>|</span>
            <a
              href="/terms"
              style={{
                ...legalLinkStyle,
                color: hoveredLink === "terms" ? "#4f46e5" : "#94a3b8",
              }}
              onMouseEnter={() => setHoveredLink("terms")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Terms of Service
            </a>
          </div>

          <p style={copyrightStyle}>
            © 2026 Hendukirwa Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}