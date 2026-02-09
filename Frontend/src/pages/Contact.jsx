import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      // Later: connect to backend API
      // axios.post("/api/contact", { name, email, message })
    }, 1000);
  };

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
    fontSize: "1.125rem",
    color: "#cbd5e1",
    lineHeight: "1.6",
  };

  const mainStyle = {
    flexGrow: 1,
    padding: "4rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    marginBottom: "4rem",
  };

  const formSectionStyle = {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  const sectionTitleStyle = {
    fontSize: "1.75rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const labelStyle = {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#334155",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const inputStyle = {
    padding: "0.875rem 1rem",
    fontSize: "1rem",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.3s ease",
    color: "#0f172a",
  };

  const textareaStyle = {
    padding: "0.875rem 1rem",
    fontSize: "1rem",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.3s ease",
    color: "#0f172a",
    resize: "vertical",
    minHeight: "150px",
    fontFamily: "inherit",
  };

  const buttonStyle = {
    padding: "1rem 2rem",
    background: hoveredButton
      ? "linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #db2777 100%)"
      : "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: hoveredButton
      ? "0 10px 15px -3px rgba(79, 70, 229, 0.4)"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transform: hoveredButton ? "translateY(-2px)" : "translateY(0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
  };

  const successContainerStyle = {
    textAlign: "center",
    padding: "3rem 2rem",
  };

  const successIconStyle = {
    width: "80px",
    height: "80px",
    margin: "0 auto 1.5rem",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.3)",
  };

  const infoSectionStyle = {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  const infoItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.25rem",
    padding: "1.25rem",
    background: "linear-gradient(135deg, rgba(79, 70, 229, 0.03) 0%, rgba(236, 72, 153, 0.03) 100%)",
    borderRadius: "12px",
    marginBottom: "1rem",
  };

  const infoIconStyle = {
    width: "48px",
    height: "48px",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.3)",
  };

  const infoContentStyle = {
    flex: 1,
  };

  const infoLabelStyle = {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#64748b",
    marginBottom: "0.25rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const infoValueStyle = {
    fontSize: "1.0625rem",
    fontWeight: "600",
    color: "#0f172a",
  };

  const mapSectionStyle = {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    marginBottom: "3rem",
  };

  const mapPlaceholderStyle = {
    width: "100%",
    height: "400px",
    background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1.5rem",
  };

  const socialSectionStyle = {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    marginBottom: "3rem",
    textAlign: "center",
  };

  const socialLinksStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "2rem",
    flexWrap: "wrap",
  };

  const socialLinkStyle = (platform) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1.5rem",
    background: hoveredSocial === platform
      ? "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)"
      : "#f8fafc",
    borderRadius: "16px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "1px solid #e2e8f0",
    minWidth: "120px",
    transform: hoveredSocial === platform ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hoveredSocial === platform
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      : "none",
  });

  const socialIconWrapperStyle = (platform) => {
    const colors = {
      facebook: "#3b5998",
      instagram: "#e1306c",
      twitter: "#1da1f2",
      whatsapp: "#25d366",
    };
    return {
      width: "56px",
      height: "56px",
      background: hoveredSocial === platform ? colors[platform] : "#f1f5f9",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
    };
  };

  const socialLabelStyle = (platform) => ({
    fontSize: "0.9375rem",
    fontWeight: "600",
    color: hoveredSocial === platform ? "#0f172a" : "#64748b",
    transition: "all 0.3s ease",
  });

  const faqBoxStyle = {
    padding: "2.5rem",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: "20px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  };

  const faqDecorativeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    background: "radial-gradient(circle at 50% 50%, #4f46e5 0%, transparent 70%)",
  };

  return (
    <>
      <style>{`
        /* Responsive adjustments */
        @media (max-width: 968px) {
          .grid-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .header-title {
            font-size: 2rem !important;
          }
          
          .header-subtitle {
            font-size: 1rem !important;
          }
          
          .main-content {
            padding: 2rem 1rem !important;
          }
          
          .form-section, .info-section, .map-section, .social-section, .faq-box {
            padding: 1.5rem !important;
          }
          
          .section-title {
            font-size: 1.5rem !important;
          }
          
          .social-links {
            gap: 1rem !important;
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
          
          .social-links {
            flex-direction: column !important;
            align-items: stretch !important;
          }
        }
        
        /* Input focus styles */
        input:focus, textarea:focus {
          border-color: #4f46e5 !important;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1) !important;
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h1 style={headerTitleStyle} className="header-title">Contact Us</h1>
            <p style={headerSubtitleStyle} className="header-subtitle">
              We'd love to hear from you! Choose the best way to reach us below.
            </p>
          </div>
        </header>

        <main style={mainStyle} className="main-content">
          {/* Form and Info Grid */}
          <div style={gridContainerStyle} className="grid-container">
            {/* Contact Form */}
            <div style={formSectionStyle} className="form-section">
              <h2 style={sectionTitleStyle} className="section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Send Us a Message
              </h2>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} style={formStyle}>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={inputStyle}
                    />
                  </div>

                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={inputStyle}
                    />
                  </div>

                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      Your Message
                    </label>
                    <textarea
                      placeholder="Tell us how we can help you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      style={textareaStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    style={buttonStyle}
                    disabled={isLoading}
                    onMouseEnter={() => setHoveredButton(true)}
                    onMouseLeave={() => setHoveredButton(false)}
                  >
                    {isLoading ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div style={successContainerStyle}>
                  <div style={successIconStyle}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.75rem" }}>
                    Thank you, {name}!
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: "1.6" }}>
                    We've received your message and will get back to you soon at <strong>{email}</strong>.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div style={infoSectionStyle} className="info-section">
              <h2 style={sectionTitleStyle} className="section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Contact Information
              </h2>

              <div style={infoItemStyle}>
                <div style={infoIconStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div style={infoContentStyle}>
                  <div style={infoLabelStyle}>Email</div>
                  <div style={infoValueStyle}>support@hendukirwa.com</div>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={infoIconStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style={infoContentStyle}>
                  <div style={infoLabelStyle}>Phone</div>
                  <div style={infoValueStyle}>+250 788 123 456</div>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={infoIconStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div style={infoContentStyle}>
                  <div style={infoLabelStyle}>Address</div>
                  <div style={infoValueStyle}>Kigali, Rwanda</div>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={infoIconStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div style={infoContentStyle}>
                  <div style={infoLabelStyle}>Hours</div>
                  <div style={infoValueStyle}>Mon–Fri, 9am – 6pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div style={mapSectionStyle} className="map-section">
            <h2 style={sectionTitleStyle} className="section-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
              Find Us
            </h2>
            <div style={{ marginTop: "1.5rem" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.72803469147!2d30.01984!3d-1.9440727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xe9b5d770e0374292!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1706472000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{
                  border: "none",
                  borderRadius: "16px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hendukirwa Marketplace Location - Kigali, Rwanda"
              />
            </div>
          </div>

          {/* Social Media Links */}
          <div style={socialSectionStyle} className="social-section">
            <h2 style={sectionTitleStyle} className="section-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Connect With Us
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748b", marginBottom: "1rem" }}>
              Follow us on social media for updates, promotions, and community news.
            </p>
            <div style={socialLinksStyle} className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={socialLinkStyle("facebook")}
                onMouseEnter={() => setHoveredSocial("facebook")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div style={socialIconWrapperStyle("facebook")}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={hoveredSocial === "facebook" ? "white" : "#3b5998"}>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span style={socialLabelStyle("facebook")}>Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={socialLinkStyle("instagram")}
                onMouseEnter={() => setHoveredSocial("instagram")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div style={socialIconWrapperStyle("instagram")}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={hoveredSocial === "instagram" ? "white" : "#e1306c"}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span style={socialLabelStyle("instagram")}>Instagram</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={socialLinkStyle("twitter")}
                onMouseEnter={() => setHoveredSocial("twitter")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div style={socialIconWrapperStyle("twitter")}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={hoveredSocial === "twitter" ? "white" : "#1da1f2"}>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <span style={socialLabelStyle("twitter")}>Twitter</span>
              </a>

              <a
                href="https://wa.me/250788123456"
                target="_blank"
                rel="noreferrer"
                style={socialLinkStyle("whatsapp")}
                onMouseEnter={() => setHoveredSocial("whatsapp")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div style={socialIconWrapperStyle("whatsapp")}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={hoveredSocial === "whatsapp" ? "white" : "#25d366"}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span style={socialLabelStyle("whatsapp")}>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* FAQ Link */}
          <div style={faqBoxStyle} className="faq-box">
            <div style={faqDecorativeStyle} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>
                Need Quick Help?
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "2rem" }}>
                Check our FAQ page for answers to common questions about orders, delivery, and payments.
              </p>
              <a
                href="/faq"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.15)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Visit FAQ Page
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}