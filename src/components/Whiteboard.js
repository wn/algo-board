import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import { connect } from "react-redux";


// Data structures
import LLNode from './data-structures/LLNode';
import List from './data-structures/List';
import GraphNode from './data-structures/GraphNode';
import Hashtable from './data-structures/Hashtable';
import Pointer from './data-structures/Pointer';

class Whiteboard extends Component {
  state = {
    stageWidth: window.innerHeight,
    tailMove: {

    },
    headMove: {

    }
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
    this.props.callTestAction();
    return (
      <div
        ref={node => {
          this.container = node;
        }}
      >
        <Stage width={this.state.stageWidth} height={window.innerHeight}>
          <Layer>
            {this.props.dataStructures}
            <Pointer />
          </Layer>
        </Stage>
      </div>
    );
  }
}

/** Access items from state.konva here */
const mapStateToProps = state => {
  return { test: state.konva.test };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callTestAction: () => dispatch({type: "TEST_ACTION", payload: 1})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Whiteboard);
