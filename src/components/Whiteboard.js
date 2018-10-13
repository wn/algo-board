import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect } from 'react-redux';

class Whiteboard extends Component {
  state = {
    stageWidth: window.innerHeight,
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
      var inputDS = ['List', 'Hashtable'];
      var input = props.size;
      if (
        inputDS.includes(dsName) &&
        (isNaN(input) || input <= 0 || input >= 25)
      ) {
        console.log('Input is not a value from 0 to 25');
      } else {
        props.size = parseInt(props.size);
        return this.props.dss[dsName].component(props);
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
            {Object.keys(this.props.dataStructures).map(
              id => createDS(
                this.props.dataStructures[id].structureName,
                {...this.props.dataStructures[id].shapeState, key: id}
              )
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
  associations: state.konva.associations,
});

export default connect(mapStateToProps)(Whiteboard);
