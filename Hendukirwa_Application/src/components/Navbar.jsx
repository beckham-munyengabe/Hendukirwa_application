import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(226, 232, 240, 0.5)",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    textDecoration: "none",
    position: "relative",
  };

  const logoIconStyle = {
    position: "relative",
    width: "40px",
    height: "40px",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    borderRadius: "12px",
    transform: "rotate(6deg)",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  const logoInnerStyle = {
    position: "absolute",
    inset: "2px",
    background: "white",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoLetterStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const logoTextStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "-0.025em",
    color: "#0f172a",
  };

  const desktopNavStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const linkStyle = {
    position: "relative",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#334155",
    textDecoration: "none",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const contactButtonStyle = {
    marginLeft: "1rem",
    padding: "0.625rem 1.5rem",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    color: "white",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.875rem",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
  };

  const mobileMenuButtonStyle = {
    display: "none",
    padding: "0.5rem",
    color: "#334155",
    background: "transparent",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const mobileMenuStyle = {
    position: "absolute",
    top: "80px",
    left: 0,
    right: 0,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(226, 232, 240, 0.5)",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    display: isOpen ? "block" : "none",
  };

  const mobileMenuContentStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "1.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const mobileLinkStyle = {
    display: "block",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    fontWeight: "500",
    color: "#334155",
    textDecoration: "none",
    borderRadius: "8px",
    transition: "all 0.2s ease",
  };

  const mobileContactButtonStyle = {
    display: "block",
    width: "100%",
    textAlign: "center",
    marginTop: "0.5rem",
    padding: "0.875rem 1rem",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    color: "white",
    borderRadius: "8px",
    fontWeight: "600",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
  };

  // Add hover styles through onMouseEnter/onMouseLeave
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <Link
            to="/"
            style={logoContainerStyle}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div
              style={{
                ...logoIconStyle,
                transform: logoHovered ? "rotate(12deg)" : "rotate(6deg)",
                boxShadow: logoHovered
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={logoInnerStyle}>
                <span style={logoLetterStyle}>H</span>
              </div>
            </div>
            <span style={logoTextStyle}>
              Hendukirwa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={desktopNavStyle} className="desktop-nav">
            <Link
              to="/"
              style={{
                ...linkStyle,
                background: hoveredLink === "home" ? "#f1f5f9" : "transparent",
                color: hoveredLink === "home" ? "#4f46e5" : "#334155",
              }}
              onMouseEnter={() => setHoveredLink("home")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Home
            </Link>
            <Link
              to="/products"
              style={{
                ...linkStyle,
                background: hoveredLink === "products" ? "#f1f5f9" : "transparent",
                color: hoveredLink === "products" ? "#4f46e5" : "#334155",
              }}
              onMouseEnter={() => setHoveredLink("products")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Products
            </Link>
            <Link
              to="/track-order"
              style={{
                ...linkStyle,
                background: hoveredLink === "track-order" ? "#f1f5f9" : "transparent",
                color: hoveredLink === "track-order" ? "#4f46e5" : "#334155",
              }}
              onMouseEnter={() => setHoveredLink("track-order")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Track Order
            </Link>
            <Link
              to="/about"
              style={{
                ...linkStyle,
                background: hoveredLink === "about" ? "#f1f5f9" : "transparent",
                color: hoveredLink === "about" ? "#4f46e5" : "#334155",
              }}
              onMouseEnter={() => setHoveredLink("about")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              About
            </Link>
            <Link
              to="/faq"
              style={{
                ...linkStyle,
                background: hoveredLink === "faq" ? "#f1f5f9" : "transparent",
                color: hoveredLink === "faq" ? "#4f46e5" : "#334155",
              }}
              onMouseEnter={() => setHoveredLink("faq")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              FAQ
            </Link>
            <Link
              to="/auth"
              style={{
                ...linkStyle,
                background: hoveredLink === "auth" ? "#f1f5f9" : "transparent",
                color: hoveredLink === "auth" ? "#4f46e5" : "#334155",
              }}
              onMouseEnter={() => setHoveredLink("auth")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Login
            </Link>
            <Link
              to="/contact"
              style={{
                ...contactButtonStyle,
                boxShadow: hoveredButton
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                transform: hoveredButton ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              Contact Us
            </Link>
            {/* Optional Cart */}
            {/* <Link to="/cart" style={linkStyle}>Cart</Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={mobileMenuButtonStyle}
            className="mobile-menu-btn"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={mobileMenuStyle}>
            <div style={mobileMenuContentStyle}>
              <Link to="/" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>
                Home
              </Link>
              <Link to="/products" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>
                Products
              </Link>
              <Link to="/track-order" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>
                Track Order
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>
                About
              </Link>
              <Link to="/faq" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>
                FAQ
              </Link>
              <Link to="/auth" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>
                Login
              </Link>
              <Link
                to="/contact"  onClick={() => setIsOpen(false)} style={mobileContactButtonStyle}>
                Contact Us
              </Link>
              {/* Optional Cart */}
              {/* <Link to="/cart" onClick={() => setIsOpen(false)} style={mobileLinkStyle}>Cart</Link> */}
            </div>
          </div>
        )}
      </nav>

      {/* Add responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        /* Hover effect for mobile links */
        a:hover {
          background: #f1f5f9 !important;
          color: #4f46e5 !important;
        }
      `}</style>

      {/* Add spacing for fixed navbar */}
      <div style={{ height: "80px" }} />
    </>
  );
}