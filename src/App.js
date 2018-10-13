import React from 'react';
import Sidebar from './components/Sidebar';
import Whiteboard from './components/Whiteboard';
import SplitPane from 'react-split-pane';

class App extends React.Component {
  render() {
    return (
      <SplitPane split="vertical" minSize={50} defaultSize={1000}>
        <div style={{ backgroundColor: 'white', height: '100%' }}>
        
        </div>
        <Sidebar/>
      </SplitPane>
    )
  }
}

export default App;