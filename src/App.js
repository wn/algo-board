import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.css';
import Sidebar from './components/Sidebar';
import Whiteboard from './components/Whiteboard';
import List from './components/data-structures/List';
import LLNode from './components/data-structures/LLNode';
import GraphNode from './components/data-structures/GraphNode';
import GraphList from './components/data-structures/GraphList';
import Hashtable from './components/data-structures/Hashtable';

class App extends Component {
  constructor(props) {
    super(props);
    this.dss = {
      List: {
        propAttrs: ['values'],
        component: props => <List {...props} />
      },
      LLNode: { propAttrs: [], component: props => <LLNode {...props} /> },
      GraphNode: {
        propAttrs: [],
        component: props => <GraphNode {...props} />
      },
      GraphList: {
        propAttrs: ['size', 'values'],
        component: props => <GraphList {...props} />
      },
      Hashtable: {
        propAttrs: ['keyValuePairs'],
        component: props => <Hashtable {...props} />
      }
    };
  }

  state = {
    dataStructures: []
  };

  createDS = (dsName, props) => {
    var inputDS = ['List', 'GraphList', 'Hashtable'];
    if (inputDS.includes(dsName) && !this.props.values) {
      alert(`Please fill in values for ${dsName}.`);
    } else {
      this.setState({
        dataStructures: [
          ...this.state.dataStructures,
          this.dss[dsName].component(props)
        ]
      });
    }
  };

  render() {
    return (
      <Grid className={'whiteboard'} fluid>
        <Row>
          <Col xs={3}>
            <Sidebar dss={this.dss} createDS={this.createDS} />
          </Col>
          <Col xs={9}>
            <Whiteboard dataStructures={this.state.dataStructures} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
