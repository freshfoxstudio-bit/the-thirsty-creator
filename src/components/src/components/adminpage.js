import React, { useState } from 'react';

const AdminPage = () => {
  const [stats] = useState({
    views: "1.2k",
    projects: 5,
    status: "Active"
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', color: '#333' }}>
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}>
        <h1>Creator Dashboard</h1>
        <p>Welcome back, Captain of the Jungle.</p>
      </header>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <div style={cardStyle}><strong>Views:</strong> {stats.views}</div>
        <div style={cardStyle}><strong>Projects:</strong> {stats.projects}</div>
        <div style={cardStyle}><strong>Status:</strong> {stats.status}</div>
      </div>

      <section>
        <h3>Quick Actions</h3>
        <button style={btnStyle} onClick={() => alert('Uploading...')}>Upload New Content</button>
        <button style={{...btnStyle, backgroundColor: '#555'}} onClick={() => alert('Checking stats...')}>View Analytics</button>
      </section>
    </div>
  );
};

const cardStyle = {
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  flex: 1,
  textAlign: 'center',
  backgroundColor: '#f9f9f9'
};

const btnStyle = {
  padding: '10px 20px',
  marginRight: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default AdminPage;
