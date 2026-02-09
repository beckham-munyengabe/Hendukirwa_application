import SellerSidebar from "../components/SellerSidebar";
import { useState } from "react";

// High-Design Icon Suite (Refined Stroke Weights & Geometry)
const Icons = {
  Search: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Send: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 14-7-3 7 3 7-14-7Z"/></svg>,
  Zap: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  History: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Verified: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#6366f1"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.106-6.41l5.903-5.903-1.414-1.414-4.489 4.49-2.23-2.231-1.414 1.415 3.644 3.643z"/></svg>,
  Check: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  // New High-Design Action Icons
  Edit: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  Trash: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>,
  Reply: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>,
  Cancel: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
};

export default function Messages() {
  const [selectedId, setSelectedId] = useState(0);
  const [replyText, setReplyText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  
  const [messages, setMessages] = useState([
    { 
      id: 0, from: "Alice Thompson", avatar: "AT", 
      customerMsg: { id: 'c0', text: "Is the artisan basket available in blue? I'd love to match my kitchen decor.", reactions: {}, isEdited: false },
      time: "10:24 AM", online: true, totalSpend: "$450.00", orders: 12, replies: [] 
    },
    { 
      id: 1, from: "John Marcus", avatar: "JM", 
      customerMsg: { id: 'c1', text: "When will my order #4402 arrive? It was supposed to be here Tuesday.", reactions: {}, isEdited: false },
      time: "Yesterday", online: false, totalSpend: "$120.00", orders: 2, 
      replies: [{ id: 'init-1', text: "Checking on this for you!", reactions: {}, isEdited: false, replyTo: null }] 
    }
  ]);

  const activeChat = messages[selectedId];

  const handleSend = () => {
    if (!replyText.trim()) return;
    const updated = [...messages];
    
    if (editingId) {
      if (updated[selectedId].customerMsg.id === editingId) {
        updated[selectedId].customerMsg.text = replyText;
        updated[selectedId].customerMsg.isEdited = true;
      } else {
        updated[selectedId].replies = updated[selectedId].replies.map(r => 
          r.id === editingId ? { ...r, text: replyText, isEdited: true } : r
        );
      }
      setEditingId(null);
    } else {
      updated[selectedId].replies.push({
        id: Date.now(),
        text: replyText,
        reactions: {},
        isEdited: false,
        replyTo: replyingTo ? replyingTo.text : null
      });
      setReplyingTo(null);
    }
    setMessages(updated);
    setReplyText("");
  };

  const handleAction = (msgId, action, emoji) => {
    const updated = [...messages];
    const target = updated[selectedId];

    if (target.customerMsg.id === msgId) {
      if (action === 'react') target.customerMsg.reactions[emoji] = (target.customerMsg.reactions[emoji] || 0) + 1;
      if (action === 'edit') { setEditingId(msgId); setReplyText(target.customerMsg.text); }
    } else {
      if (action === 'unsend') {
        target.replies = target.replies.filter(r => r.id !== msgId);
      } else {
        target.replies = target.replies.map(r => {
          if (r.id === msgId) {
            if (action === 'react') r.reactions[emoji] = (r.reactions[emoji] || 0) + 1;
          }
          return r;
        });
      }
    }
    setMessages(updated);
  };

  const filteredMessages = messages.filter(m => 
    m.from.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: "flex", height: "100vh", background: "#0B0E14", color: "#E2E8F0", fontFamily: "Geist, Inter, sans-serif" }}>
      <style>{`
        .glass-panel { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
        .sidebar-item { border-radius: 12px; transition: 0.2s; border: 1px solid transparent; cursor: pointer; }
        .sidebar-item.active { background: rgba(99, 102, 241, 0.1); border-color: rgba(99, 102, 241, 0.3); }
        
        .chat-bubble { padding: 14px 18px; border-radius: 20px; font-size: 0.92rem; line-height: 1.5; max-width: 78%; position: relative; word-wrap: break-word; }
        .bubble-customer { background: #1C1F26; border: 1px solid #2D3139; align-self: flex-start; border-bottom-left-radius: 4px; }
        .bubble-seller { background: #6366F1; color: white; align-self: flex-end; border-bottom-right-radius: 4px; box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4); }
        
        .msg-actions { 
          position: absolute; top: -38px; display: none; 
          background: #1C1F26; border: 1px solid #2D3139; border-radius: 12px; 
          padding: 6px 10px; gap: 10px; z-index: 20; align-items: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        }
        .chat-bubble:hover .msg-actions { display: flex; }
        .bubble-customer .msg-actions { left: 0; }
        .bubble-seller .msg-actions { right: 0; }

        .quote-pill { background: rgba(255,255,255,0.1); border-left: 3px solid #A855F7; padding: 8px 12px; border-radius: 8px; font-size: 0.75rem; margin-bottom: 10px; color: rgba(255,255,255,0.8); }
        .action-btn { background: none; border: none; color: #94A3B8; cursor: pointer; padding: 2px; transition: 0.2s; display: flex; align-items: center; }
        .action-btn:hover { color: #fff; transform: translateY(-1px); }
        
        .reaction-badge { position: absolute; bottom: -14px; background: #1C1F26; border: 1px solid #2D3139; padding: 2px 8px; border-radius: 20px; font-size: 0.7rem; display: flex; gap: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.3); }
        .bubble-customer .reaction-badge { left: 12px; }
        .bubble-seller .reaction-badge { right: 12px; }
      `}</style>
      
      <SellerSidebar />
      
      <main style={{ flex: 1, display: "flex", padding: "16px", gap: "16px" }}>
        
        {/* Conversations List */}
        <div className="glass-panel" style={{ width: "320px", borderRadius: "24px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div className="search-container" style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: "12px" }}>
            <Icons.Search />
            <input className="search-input" style={{background: "none", border: "none", color: "white", outline: "none", fontSize: "0.85rem"}} placeholder="Search chats..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "12px" }}>
            {filteredMessages.map((m) => {
              const idx = messages.findIndex(orig => orig.id === m.id);
              return (
                <div key={m.id} onClick={() => {setSelectedId(idx); setReplyingTo(null);}} className={`sidebar-item ${selectedId === idx ? 'active' : ''}`} style={{ padding: "14px", marginBottom: "4px" }}>
                  <div style={{ display: "flex", gap: "14px" }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "#2D3139", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700" }}>{m.avatar}</div>
                      {m.online && <div style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "10px", height: "10px", background: "#10B981", borderRadius: "50%", border: "2px solid #16191f" }} />}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", fontWeight: "700" }}>
                        <span>{m.from}</span>
                        <span style={{ fontSize: "0.7rem", color: "#64748B" }}>{m.time}</span>
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#94A3B8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", margin: 0 }}>{m.customerMsg.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Chat View */}
        <div className="glass-panel" style={{ flex: 1, borderRadius: "24px", display: "flex", flexDirection: "column", background: "#0B0E14" }}>
          <div style={{ padding: "20px 28px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#1C1F26", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", color: "#6366F1" }}>{activeChat.avatar}</div>
              <span style={{ fontWeight: "800", fontSize: "1rem" }}>{activeChat.from}</span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
                {["In stock", "Shipped"].map(tag => (
                  <button key={tag} onClick={() => setReplyText(tag)} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", padding: "6px 12px", borderRadius: "8px", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer" }}>+{tag}</button>
                ))}
            </div>
          </div>

          <div style={{ flex: 1, padding: "32px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "35px" }}>
            {/* Customer Bubble */}
            <div className="chat-bubble bubble-customer">
              <div className="msg-actions">
                {["❤️", "👍"].map(e => <button key={e} className="action-btn" style={{fontSize: '14px'}} onClick={() => handleAction(activeChat.customerMsg.id, 'react', e)}>{e}</button>)}
                <button className="action-btn" onClick={() => setReplyingTo(activeChat.customerMsg)} title="Reply"><Icons.Reply /></button>
                <button className="action-btn" onClick={() => {setEditingId(activeChat.customerMsg.id); setReplyText(activeChat.customerMsg.text);}} title="Edit"><Icons.Edit /></button>
              </div>
              {activeChat.customerMsg.text}
              {activeChat.customerMsg.isEdited && <div style={{fontSize: '0.6rem', opacity: 0.5, marginTop: '4px'}}>edited</div>}
              {Object.keys(activeChat.customerMsg.reactions).length > 0 && (
                <div className="reaction-badge">{Object.entries(activeChat.customerMsg.reactions).map(([e, c]) => <span key={e}>{e} {c}</span>)}</div>
              )}
            </div>
            
            {/* Seller Bubbles */}
            {activeChat.replies.map((reply) => (
              <div key={reply.id} className="chat-bubble bubble-seller">
                <div className="msg-actions">
                  {["🔥", "😮"].map(e => <button key={e} className="action-btn" style={{fontSize: '14px'}} onClick={() => handleAction(reply.id, 'react', e)}>{e}</button>)}
                  <button className="action-btn" onClick={() => setReplyingTo(reply)}><Icons.Reply /></button>
                  <button className="action-btn" onClick={() => {setEditingId(reply.id); setReplyText(reply.text);}}><Icons.Edit /></button>
                  <button className="action-btn" onClick={() => handleAction(reply.id, 'unsend')} style={{color: "#FCA5A5"}}><Icons.Trash /></button>
                </div>
                {reply.replyTo && <div className="quote-pill">"{reply.replyTo.substring(0, 45)}..."</div>}
                {reply.text}
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4px", opacity: 0.7, gap: '4px', alignItems: 'center' }}>
                    {reply.isEdited && <span style={{fontSize: '0.6rem'}}>edited</span>}
                    <Icons.Check />
                </div>
                {Object.keys(reply.reactions || {}).length > 0 && (
                  <div className="reaction-badge">{Object.entries(reply.reactions).map(([e, c]) => <span key={e}>{e} {c}</span>)}</div>
                )}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div style={{ padding: "24px 32px 32px" }}>
            {replyingTo && (
              <div style={{ background: "rgba(99, 102, 241, 0.1)", padding: "12px 16px", borderRadius: "14px 14px 0 0", border: "1px solid rgba(99, 102, 241, 0.2)", borderBottom: "none", fontSize: "0.8rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{display: 'flex', gap: '8px', alignItems: 'center', opacity: 0.8}}>
                    <Icons.Reply />
                    <span>Replying to: <b>{replyingTo.text.substring(0, 35)}...</b></span>
                </div>
                <button onClick={() => setReplyingTo(null)} style={{background:"none", border:"none", color:"#94A3B8", cursor:"pointer"}}><Icons.Cancel /></button>
              </div>
            )}
            <div style={{ background: "#16191F", border: "1px solid #2D3139", borderRadius: replyingTo ? "0 0 16px 16px" : "16px", padding: "8px", display: "flex", alignItems: "center" }}>
              <input 
                placeholder={editingId ? "Editing message..." : "Type your message..."} 
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "white", padding: "0 16px", fontSize: "0.9rem" }} 
              />
              {editingId && <button onClick={() => {setEditingId(null); setReplyText("");}} style={{background: 'none', border: 'none', color: '#94A3B8', marginRight: '10px', cursor: 'pointer', fontSize: '0.8rem'}}>Cancel</button>}
              <button onClick={handleSend} style={{ background: "#6366F1", color: "white", border: "none", padding: "10px 22px", borderRadius: "12px", fontWeight: "800", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                {editingId ? "SAVE" : "SEND"} <Icons.Send />
              </button>
            </div>
          </div>
        </div>

        {/* Right Stats Column */}
        <div className="glass-panel" style={{ width: "300px", borderRadius: "24px", padding: "32px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ width: "72px", height: "72px", background: "linear-gradient(135deg, #6366F1, #A855F7)", borderRadius: "24px", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", fontWeight: "900", boxShadow: "0 10px 20px rgba(99,102,241,0.3)" }}>{activeChat.avatar}</div>
            <h3 style={{ margin: "0 0 6px", fontSize: "1.1rem", fontWeight: "800" }}>{activeChat.from}</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.75rem", color: "#6366F1", fontWeight: "800" }}><Icons.Verified /> TOP CUSTOMER</div>
          </div>
          <div style={{ display: "grid", gap: "12px" }}>
            <div style={{ background: "#16191F", padding: "16px", borderRadius: "16px", border: "1px solid #2D3139" }}>
                <div style={{ fontSize: "0.6rem", color: "#64748B", fontWeight: "800", marginBottom: "6px" }}>LIFETIME SPEND</div>
                <div style={{ fontWeight: "900", fontSize: "1.1rem" }}>{activeChat.totalSpend}</div>
            </div>
            <div style={{ background: "#16191F", padding: "16px", borderRadius: "16px", border: "1px solid #2D3139" }}>
                <div style={{ fontSize: "0.6rem", color: "#64748B", fontWeight: "800", marginBottom: "6px" }}>TOTAL ORDERS</div>
                <div style={{ fontWeight: "900", fontSize: "1.1rem" }}>{activeChat.orders}</div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}