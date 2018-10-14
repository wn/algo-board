import React from 'react';
import { connect } from 'react-redux';
import SidebarItem from './SidebarItem';
import './Sidebar.css';
import { ListGroup } from 'react-bootstrap';

import codeIcon from '../terminal.png';

class Sidebar extends React.Component {
  counter = 0;

  render() {
    const { addStructure } = this.props;
    return (
      <div className={'sidebar'}>
        <p className={'header'}><img src={codeIcon} className="codeIcon" alt="code" />Algo board</p>
        <ListGroup>
          {Object.keys(this.props.dss).filter(dsName => dsName !== "GraphPointer").map(dsName => {
            const { propAttrs } = this.props.dss[dsName];
            return (
              <SidebarItem
                key={dsName}
                dsName={dsName}
                propAttrs={propAttrs}
                createDS={otherStates => {
                  
                  if (otherStates.values) {
                    otherStates.values = otherStates.values
                      .split(',')
                      .map(x => x.trim());
                  }
                  
                  addStructure(otherStates, dsName, this.counter++)
                }
                }
              />
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  addStructure: (shapeState, structureName, id) => {
    var inputDS = {
      List: 'values',
      GraphList: 'graphValues',
      Hashtable: 'keyValuePairs'
    };

    if (structureName in inputDS && !shapeState[inputDS[structureName]]) {
      alert(`Please fill in values for ${structureName}.`);
    } else {
      dispatch({
        type: 'ADD_STRUCTURE',
        payload: { shapeState, structureName, id: id.toString() }
      });
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
