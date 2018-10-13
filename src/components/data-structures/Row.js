import React from 'react';
import Data from './Data';
import EditableText from './EditableText';

export default class Row extends React.Component {
  render() {
    return (
      <React.Fragment>
        {(this.props.pair || [undefined, undefined]).map((val, index) => {
          return (
            <>
              <Data
                key={index}
                x={this.props.x + index * 200}
                y={this.props.y + this.props.displacement * 50}
              />
              <EditableText
                key={val}
                x={this.props.x + index * 200 + 50}
                y={this.props.y + this.props.displacement * 50 + 20}
                text={val}
              />
            </>
          );
        })}
      </React.Fragment>
    );
  }
}
