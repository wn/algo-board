import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import dustbin from './dustbin.png';

import './App.css';
import Sidebar from './components/Sidebar';
import Whiteboard from './components/Whiteboard';
import List from './components/data-structures/List';
import LLNode from './components/data-structures/LLNode';
import GraphNode from './components/data-structures/GraphNode';
import GraphList from './components/data-structures/GraphList';
import Hashtable from './components/data-structures/Hashtable';
import GraphPointer from './components/data-structures/GraphPointer';
import Pointer from './components/data-structures/Pointer';

class App extends Component {
  constructor(props) {
    super(props);
    this.dss = {
      List: {
        propAttrs: ['values'],
        component: props => <List {...props} />
      },
      GraphList: {
        propAttrs: ['graphValues'],
        component: props => <GraphList {...props} />
      },
      Hashtable: {
        propAttrs: ['keyValuePairs'],
        component: props => <Hashtable {...props} />
      },
      Pointer: {
        propAttrs: [],
        component: props => <Pointer {...props} />
      },
      LLNode: { propAttrs: [], component: props => <LLNode {...props} /> },
      GraphNode: {
        propAttrs: [],
        component: props => <GraphNode {...props} />
      },
      GraphPointer: {
        propAttrs: [],
        component: props => <GraphPointer {...props} />
      },
      Pointer: {
        propAttrs: [],
        component: props => <Pointer {...props} />
      }
    };
  }

  render() {
    return (
      <Grid className={'whiteboard'} fluid>
        <Row>
          <Col xs={3}>
            <Sidebar dss={this.dss} createDS={this.createDS} />
          </Col>
          <Col xs={9}>
            <Whiteboard dss={this.dss} />
          </Col>
        </Row>
        <img src={dustbin} className="dustbin" alt="dustbin" />
      </Grid>
    );
  }
}

export default App;
