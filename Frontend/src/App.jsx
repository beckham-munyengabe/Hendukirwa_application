import React from 'react';
import { ShoppingBag, Home, BarChart2, Search, Settings, LogOut } from 'lucide-react';
import './App.css'; // Import your custom CSS

export default function StockDashboard() {
  const products = [
    { id: 1, name: 'Oversized T-shirt', price: '389.99', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518' },
    { id: 2, name: 'Classic Jeans', price: '220.00', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d' },
    { id: 3, name: 'Gray Hoodie', price: '431.99', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7' },
    { id: 4, name: 'Formal Blazer', price: '450.00', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea' }
  ];

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="user-profile">
          <img src="https://i.pravatar.cc/100" className="profile-img" alt="User" />
          <div>
            <h4 style={{color: 'white'}}>Juliana Silva</h4>
            <small>@stockmanager</small>
          </div>
        </div>

        <nav className="nav-menu">
          <div className="nav-item"><Home size={20}/> Home</div>
          <div className="nav-item active"><ShoppingBag size={20}/> Sales Product</div>
          <div className="nav-item"><BarChart2 size={20}/> Statistics</div>
        </nav>

        <div className="sidebar-footer">
          <div className="nav-item"><Settings size={20}/> Setting</div>
          <div className="nav-item" style={{color: '#f87171'}}><LogOut size={20}/> Logout</div>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="title-group">
            <h1>Sales Product</h1>
            <p style={{color: 'var(--accent-purple)', fontWeight: 'bold'}}>Items found in inventory</p>
          </div>
          
          <div className="search-box" style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
             <input type="text" placeholder="Search..." style={{padding: '15px 30px', borderRadius: '30px', border: 'none', width: '300px'}} />
             <div style={{fontWeight: '900', fontSize: '1.5rem', fontStyle: 'italic'}}>ORCELLE</div>
          </div>
        </header>

        <section className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span className="price-tag">${product.price}</span>
                <span style={{fontWeight: 'bold', fontSize: '0.9rem'}}>{product.name}</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}