import React from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'green', height: '100%', marginTop: -21}}>
          <h1>Data Structures</h1>
          <ul>
            {
              Object.keys(this.props.dss).map((dsName, index) => {
                const { propAttrs } = this.props.dss[dsName];
                return (
                  <SidebarItem key={index} dsName={dsName} propAttrs={propAttrs} createDS={this.props.createDS}/>
                );
              })
            }
          </ul>
      </div>
    );
  }
}

export default Sidebar;
