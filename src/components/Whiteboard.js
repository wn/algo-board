import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect } from 'react-redux';

class Whiteboard extends Component {
  state = {
    stageWidth: window.innerHeight,
    tailMove: {},
    headMove: {}
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
    console.log(this.props);
    return (
      <div
        ref={node => {
          this.container = node;
        }}
      >
        <Stage width={this.state.stageWidth} height={window.innerHeight}>
          <Layer>{this.props.dataStructures}</Layer>
        </Stage>
      </div>
    );
  }
}

/** Access items from state.konva here */
const mapStateToProps = state => {
  return { test: state.konva.test };
};

const mapDispatchToProps = dispatch => {
  return {
    addStructure: (structureName, id) => dispatch({
      type: "ADD_STRUCTURE", payload: {structureName, id}
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Whiteboard);
