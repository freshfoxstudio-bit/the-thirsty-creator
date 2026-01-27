import React from 'react';

const AdminPage = ({ onBack }) => {
  return (
    <div style={{ padding: '20px', animation: 'fadeIn 0.5s' }}>
      <div className="glass-card">
        <h2 className="title-text" style={{ fontSize: '1.8rem' }}>Admin Control</h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--electric-blue)', marginBottom: '20px' }}>
          Authenticated: <strong>hcandlish2014@gmail.com</strong>
        </p>
        
        <div style={{ textAlign: 'left', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--sunny-yellow)', marginBottom: '15px' }}>
            Lab Management
          </h3>
          
          <button className="btn-primary" style={{ marginBottom: '12px', fontSize: '0.9rem' }}>
            Add New Experiment (Recipe)
          </button>
          
          <button className="btn-primary" style={{ marginBottom: '12px', fontSize: '0.9rem', background: 'white' }}>
            Edit Menu & Pricing
          </button>

          <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(0,0,0,0.2)', borderRadius: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>Safety & Privacy</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Public Access</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <button 
          className="btn-small" 
          onClick={onBack} 
          style={{ marginTop: '40px', width: '100%', padding: '15px' }}
        >
          Return to Lab
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
