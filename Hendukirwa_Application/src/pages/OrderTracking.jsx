import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (orderId === "101" || email === "buyer@example.com") {
        setStatus({
          found: true,
          orderNumber: orderId || "101",
          currentStatus: "Shipped",
          timeline: [
            { step: "Order Placed", completed: true, date: "Jan 24, 2026" },
            { step: "Processing", completed: true, date: "Jan 25, 2026" },
            { step: "Shipped", completed: true, date: "Jan 26, 2026" },
            { step: "Out for Delivery", completed: false, date: "Expected Jan 28" },
            { step: "Delivered", completed: false, date: "Pending" },
          ],
        });
      } else {
        setStatus({
          found: false,
        });
      }
      setIsLoading(false);
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
    maxWidth: "700px",
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
    maxWidth: "700px",
    margin: "0 auto",
    width: "100%",
  };

  const formContainerStyle = {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
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

  const statusContainerStyle = {
    marginTop: "2.5rem",
    padding: "2.5rem",
    background: "#fff",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  const successHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
    padding: "1.5rem",
    background: "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
    borderRadius: "12px",
    border: "1px solid rgba(79, 70, 229, 0.1)",
  };

  const successIconStyle = {
    width: "60px",
    height: "60px",
    background: "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.3)",
  };

  const errorContainerStyle = {
    marginTop: "2.5rem",
    padding: "2rem",
    background: "#fff",
    borderRadius: "20px",
    border: "1px solid #fee2e2",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const errorIconStyle = {
    width: "60px",
    height: "60px",
    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1.5rem",
    boxShadow: "0 4px 6px -1px rgba(239, 68, 68, 0.3)",
  };

  const timelineStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    marginTop: "2rem",
  };

  const timelineItemStyle = (completed) => ({
    display: "flex",
    gap: "1.5rem",
    position: "relative",
  });

  const timelineIconStyle = (completed) => ({
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: completed
      ? "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)"
      : "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: completed ? "0 4px 6px -1px rgba(79, 70, 229, 0.3)" : "none",
    border: completed ? "none" : "2px solid #e2e8f0",
  });

  const timelineLineStyle = {
    position: "absolute",
    left: "23px",
    top: "48px",
    bottom: "-24px",
    width: "2px",
    background: "#e2e8f0",
  };

  const timelineContentStyle = {
    flex: 1,
    paddingTop: "0.5rem",
  };

  const timelineStepStyle = (completed) => ({
    fontSize: "1rem",
    fontWeight: "600",
    color: completed ? "#0f172a" : "#64748b",
    marginBottom: "0.25rem",
  });

  const timelineDateStyle = {
    fontSize: "0.875rem",
    color: "#64748b",
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
            font-size: 1rem !important;
          }
          
          .main-content {
            padding: 2rem 1rem !important;
          }
          
          .form-container {
            padding: 1.5rem !important;
          }
          
          .status-container {
            padding: 1.5rem !important;
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
        }
        
        /* Input focus styles */
        input:focus {
          border-color: #4f46e5 !important;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1) !important;
        }
      `}</style>

      <div style={pageContainerStyle}>
        <Navbar />

        <header style={headerStyle}>
          <div style={headerDecorativeStyle} />
          <div style={headerContentStyle} className="header-content">
            <div style={iconContainerStyle} className="icon-container">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h1 style={headerTitleStyle} className="header-title">Track Your Order</h1>
            <p style={headerSubtitleStyle} className="header-subtitle">
              Enter your Order ID or Email to check the current status of your delivery.
            </p>
          </div>
        </header>

        <main style={mainStyle} className="main-content">
          <div style={formContainerStyle} className="form-container">
            <form onSubmit={handleTrackOrder} style={formStyle}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  Order ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. 101"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
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
                    Tracking...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    Track Order
                  </>
                )}
              </button>
            </form>
          </div>

          {status && status.found && (
            <div style={statusContainerStyle} className="status-container">
              <div style={successHeaderStyle}>
                <div style={successIconStyle}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.25rem" }}>
                    Order Found!
                  </h2>
                  <p style={{ fontSize: "0.9375rem", color: "#64748b" }}>
                    Order #{status.orderNumber} • Status: <strong style={{ color: "#4f46e5" }}>{status.currentStatus}</strong>
                  </p>
                </div>
              </div>

              <h3 style={{ fontSize: "1.125rem", fontWeight: "700", color: "#0f172a", marginBottom: "1.5rem" }}>
                Tracking Timeline
              </h3>

              <div style={timelineStyle}>
                {status.timeline.map((item, index) => (
                  <div key={index} style={timelineItemStyle(item.completed)}>
                    {index < status.timeline.length - 1 && <div style={timelineLineStyle} />}
                    <div style={timelineIconStyle(item.completed)}>
                      {item.completed ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2">
                          <circle cx="12" cy="12" r="5"></circle>
                        </svg>
                      )}
                    </div>
                    <div style={timelineContentStyle}>
                      <div style={timelineStepStyle(item.completed)}>{item.step}</div>
                      <div style={timelineDateStyle}>{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {status && !status.found && (
            <div style={errorContainerStyle}>
              <div style={errorIconStyle}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.75rem" }}>
                Order Not Found
              </h3>
              <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: "1.6" }}>
                We couldn't find an order matching the information provided. Please check your Order ID or Email and try again.
              </p>
            </div>
          )}
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