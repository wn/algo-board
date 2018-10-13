import React from 'react';

const Sidebar = (props) => {
  return (
    <div style={{backgroundColor: 'green', height: '100%', marginTop: -21}}>
        <h1>Data Structures</h1>
        <ul>
          {
            props.dss.map((ds) => {
              return (
                <li key={ds.name}>
                  <button onClick={() => props.createDS(ds.name)}>{ds.name}</button>
                </li>
              )
            })
          }
        </ul>
    </div>
  );
}

export default Sidebar;