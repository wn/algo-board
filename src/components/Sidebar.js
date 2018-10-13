import React from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';
import { ListGroup } from 'react-bootstrap';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={'sidebar'}>
        <p className={'header'}>Algo board</p>
        <ListGroup>
          {Object.keys(this.props.dss).map(dsName => {
            const { propAttrs } = this.props.dss[dsName];
            return (
              <SidebarItem
                key={dsName}
                dsName={dsName}
                propAttrs={propAttrs}
                createDS={this.props.createDS}
              />
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default Sidebar;
