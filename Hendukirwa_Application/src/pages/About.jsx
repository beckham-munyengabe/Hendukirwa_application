import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  const pageContainerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
  };

  const headerStyle = {
    position: "relative",
    padding: "8rem 2rem 5rem",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    overflow: "hidden",
  };

  const headerDecorativeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.08,
    background: "radial-gradient(circle at 30% 50%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 70% 50%, #ec4899 0%, transparent 50%)",
  };

  const headerContentStyle = {
    position: "relative",
    zIndex: 1,
    maxWidth: "800px",
    margin: "0 auto",
  };

  const iconContainerStyle = {
    width: "80px",
    height: "80px",
    margin: "0 auto 2rem",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };

  const headerTitleStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
    lineHeight: "1.2",
  };

  const headerSubtitleStyle = {
    fontSize: "1.25rem",
    color: "#cbd5e1",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto",
  };

  const mainStyle = {
    flexGrow: 1,
    padding: "4rem 2rem",
    maxWidth: "1000px",
    margin: "0 auto",
    width: "100%",
  };

  const sectionStyle = {
    marginBottom: "4rem",
  };

  const sectionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const sectionIconStyle = {
    width: "32px",
    height: "32px",
    color: "#4f46e5",
  };

  const paragraphStyle = {
    fontSize: "1.0625rem",
    color: "#475569",
    lineHeight: "1.8",
    marginBottom: "1rem",
  };

  const highlightBoxStyle = {
    padding: "2rem",
    background: "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
    borderRadius: "16px",
    border: "1px solid rgba(79, 70, 229, 0.1)",
    marginTop: "1.5rem",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    fontSize: "1.0625rem",
    color: "#475569",
    lineHeight: "1.8",
  };

  const checkIconStyle = {
    width: "24px",
    height: "24px",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "0.125rem",
  };

  const teamGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  };

  const teamCardStyle = (index) => ({
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "2rem",
    transition: "all 0.3s ease",
    boxShadow: hoveredCard === index
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    transform: hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
    textAlign: "center",
  });

  const roleIconContainerStyle = {
    width: "70px",
    height: "70px",
    margin: "0 auto 1.5rem",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.3)",
  };

  const roleNameStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "0.75rem",
  };

  const roleDescStyle = {
    fontSize: "0.9375rem",
    color: "#64748b",
    lineHeight: "1.6",
  };

  const ctaSectionStyle = {
    padding: "3rem",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: "20px",
    textAlign: "center",
    marginTop: "4rem",
    position: "relative",
    overflow: "hidden",
  };

  const ctaDecorativeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    background: "radial-gradient(circle at 50% 50%, #4f46e5 0%, transparent 70%)",
  };

  const ctaContentStyle = {
    position: "relative",
    zIndex: 1,
  };

  const ctaTitleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "1rem",
  };

  const ctaTextStyle = {
    fontSize: "1.125rem",
    color: "#cbd5e1",
    lineHeight: "1.6",
    marginBottom: "2rem",
    maxWidth: "600px",
    margin: "0 auto 2rem",
  };

  const ctaButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem 2.5rem",
    background: hoveredButton
      ? "linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #db2777 100%)"
      : "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    fontSize: "1.0625rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: hoveredButton
      ? "0 10px 15px -3px rgba(79, 70, 229, 0.4)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
    transform: hoveredButton ? "translateY(-2px)" : "translateY(0)",
    textDecoration: "none",
  };

  const statsContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
    marginBottom: "4rem",
  };

  const statBoxStyle = {
    textAlign: "center",
    padding: "2rem",
    background: "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
    borderRadius: "16px",
    border: "1px solid rgba(79, 70, 229, 0.1)",
  };

  const statNumberStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0.5rem",
  };

  const statLabelStyle = {
    fontSize: "1rem",
    color: "#64748b",
    fontWeight: "500",
  };

  return (
    <>
      <style>{`
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .header-title {
            font-size: 2rem !important;
          }
          
          .header-subtitle {
            font-size: 1.0625rem !important;
          }
          
          .section-title {
            font-size: 1.5rem !important;
          }
          
          .main-content {
            padding: 2rem 1rem !important;
          }
          
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .stats-container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .cta-section {
            padding: 2rem 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .header-title {
            font-size: 1.75rem !important;
          }
          
          .header-content {
            padding: 5rem 1rem 3rem !important;
          }
          
          .icon-container {
            width: 60px !important;
            height: 60px !important;
          }
          
          .icon-container svg {
            width: 30px !important;
            height: 30px !important;
          }
          
          .cta-title {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

      <div style={pageContainerStyle}>
        <Navbar />

        {/* Hero Section */}
        <header style={headerStyle}>
          <div style={headerDecorativeStyle} />
          <div style={headerContentStyle} className="header-content">
            <div style={iconContainerStyle} className="icon-container">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h1 style={headerTitleStyle} className="header-title">About Hendukirwa Marketplace</h1>
            <p style={headerSubtitleStyle} className="header-subtitle">
              Empowering communities by connecting local sellers with buyers in a simple, guest‐friendly way.
            </p>
          </div>
        </header>

        <main style={mainStyle} className="main-content">
          {/* Stats Section */}
          <div style={statsContainerStyle} className="stats-container">
            <div style={statBoxStyle}>
              <div style={statNumberStyle}>1000+</div>
              <div style={statLabelStyle}>Active Products</div>
            </div>
            <div style={statBoxStyle}>
              <div style={statNumberStyle}>500+</div>
              <div style={statLabelStyle}>Happy Sellers</div>
            </div>
            <div style={statBoxStyle}>
              <div style={statNumberStyle}>10K+</div>
              <div style={statLabelStyle}>Orders Completed</div>
            </div>
          </div>

          {/* Mission Section */}
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle} className="section-title">
              <svg style={sectionIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              Our Mission
            </h2>
            <p style={paragraphStyle}>
              Hendukirwa Marketplace is designed to showcase products with dignity and accuracy. We provide a platform where sellers can manage their inventory and buyers can shop without the hassle of creating accounts.
            </p>
            <div style={highlightBoxStyle}>
              <p style={{ ...paragraphStyle, marginBottom: 0, fontWeight: "500" }}>
                💡 We believe that commerce should be accessible to everyone, regardless of their technical expertise or access to traditional banking systems.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle} className="section-title">
              <svg style={sectionIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              What We Offer
            </h2>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <div style={checkIconStyle}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Easy product browsing with multiple images and detailed descriptions</span>
              </li>
              <li style={listItemStyle}>
                <div style={checkIconStyle}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Secure order placement and guest‐friendly tracking system</span>
              </li>
              <li style={listItemStyle}>
                <div style={checkIconStyle}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Comprehensive seller dashboards for managing products and sales</span>
              </li>
              <li style={listItemStyle}>
                <div style={checkIconStyle}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Super Admin oversight ensuring system integrity and trust</span>
              </li>
            </ul>
          </section>

          {/* Values Section */}
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle} className="section-title">
              <svg style={sectionIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              Our Values
            </h2>
            <p style={paragraphStyle}>
              We believe in transparency, community empowerment, and modern design principles. Every feature is built to ensure buyers and sellers have a smooth, reliable experience.
            </p>
            <p style={paragraphStyle}>
              Our commitment extends beyond technology—we're building a platform that respects local culture, promotes fair trade, and empowers entrepreneurs to grow their businesses with dignity.
            </p>
          </section>

          {/* Team Section */}
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle} className="section-title">
              <svg style={sectionIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Meet the Team
            </h2>
            <p style={paragraphStyle}>
              Hendukirwa is powered by passionate developers, local artisans, and community leaders who believe in building technology for social impact.
            </p>
            <div style={teamGridStyle} className="team-grid">
              <div
                style={teamCardStyle(0)}
                onMouseEnter={() => setHoveredCard(0)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={roleIconContainerStyle}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3 style={roleNameStyle}>Super Admin</h3>
                <p style={roleDescStyle}>
                  Oversees system integrity, manages sellers, and ensures the platform runs smoothly for everyone.
                </p>
              </div>

              <div
                style={teamCardStyle(1)}
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={roleIconContainerStyle}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="9"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                </div>
                <h3 style={roleNameStyle}>Admin (Seller)</h3>
                <p style={roleDescStyle}>
                  Manages products, inventory, and orders with powerful tools designed for efficiency.
                </p>
              </div>

              <div
                style={teamCardStyle(2)}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={roleIconContainerStyle}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </div>
                <h3 style={roleNameStyle}>Buyer</h3>
                <p style={roleDescStyle}>
                  Browses quality products and places orders seamlessly as a guest—no account required.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section style={ctaSectionStyle} className="cta-section">
            <div style={ctaDecorativeStyle} />
            <div style={ctaContentStyle}>
              <h2 style={ctaTitleStyle} className="cta-title">Get in Touch</h2>
              <p style={ctaTextStyle}>
                Have questions or feedback? Reach out to us and let's build a better marketplace together.
              </p>
              <a
                href="/contact"
                style={ctaButtonStyle}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Contact Us
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}