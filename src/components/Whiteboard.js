import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect } from 'react-redux';

class Whiteboard extends Component {
  state = {
    stageWidth: window.innerHeight
  };

  componentDidMount() {
    this.checkSize();
    window.addEventListener('resize', this.checkSize);
  }

  checkSize = () => {
    const width = this.container.offsetWidth;
    this.setState({
      stageWidth: width
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkSize);
  }

  render() {
    const createDS = (dsName, props) => {
      var inputDS = ['List', 'GraphList', 'Hashtable'];
      if (inputDS.includes(dsName) && !props.values) {
        alert(`Please fill in values for ${dsName}.`);
      } else {
        return this.dss[dsName].component(props);
      }
    };

    console.log(this.props);
    return (
      <div
        ref={node => {
          this.container = node;
        }}
      >
        <Stage width={this.state.stageWidth} height={window.innerHeight}>
          <Layer>
            {Object.keys(this.props.dataStructures).map(id =>
              createDS(this.props.dataStructures[id].structureName, {
                ...this.props.dataStructures[id].shapeState,
                key: id
              })
            )}
          </Layer>
        </Stage>
      </div>
    );
  }
}

/** Access items from state.konva here */
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  dataStructures: state.konva.dataStructures,
  associations: state.konva.associations
});

export default connect(mapStateToProps)(Whiteboard);
