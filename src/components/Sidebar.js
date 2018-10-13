import React from 'react';

const Sidebar = props => {
  const dss = [
    { name: 'Array', image: '' },
    { name: 'LLNode', image: '' },
    { name: 'TreeNode', image: '' },
    { name: 'GraphNode', image: '' }
  ];
  return (
    <div style={{ backgroundColor: 'green', height: '100%', marginTop: -21 }}>
      <h1>Data Structures</h1>
      <ul>
        {dss.map((ds, index) => (
          <li key={index}>{ds.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
