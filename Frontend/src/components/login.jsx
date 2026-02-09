import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react';
import './login.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
      <div className="auth-split-container">
        
        {/* LEFT SIDE: COMPANY INFO */}
        <div className="info-panel">
          <div className="info-content">
            <div className="brand-header">
              {/* CIRCULAR LOGO CONTAINER */}
              <div className="logo-circle primary-logo">
                <img src="YOUR_LOGO_URL_HERE" alt="Logo" />
              </div>
              <span className="brand-name">Birahendutse</span>
            </div>

            <h1>Smart Inventory, <br/><span>Faster Growth.</span></h1>
            <p>Streamline your e-commerce operations with our high-performance stock management system.</p>
            
            <div className="features-list">
              <div className="feature-item">
                <CheckCircle2 size={20} className="feature-icon" />
                <span>Real-time Sales Tracking</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 size={20} className="feature-icon" />
                <span>Advanced Analytics Dashboard</span>
              </div>
            </div>
          </div>
          <div className="info-footer">© 2026 Birahendutse Inc.</div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="form-panel">
          <div className="form-box">
            <header className="form-header">
              {/* CIRCULAR MINI LOGO */}
              <div className="logo-circle mini-logo">
                <img src="YOUR_LOGO_URL_HERE" alt="B" />
              </div>
              <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
              <p>{isLogin ? "Welcome back! Enter your details." : "Join our community today."}</p>
            </header>

            <form onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="input-group">
                  <label>Full Name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input type="text" placeholder="Alex Johnson" required />
                  </div>
                </div>
              )}

              <div className="input-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={18} />
                  <input type="email" placeholder="name@company.com" required />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                {isLogin ? "Login to Dashboard" : "Register Now"}
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="toggle-area">
              <span>{isLogin ? "Don't have an account?" : "Already a member?"}</span>
              <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}