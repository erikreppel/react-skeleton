import React from 'react';

class Counter extends React.Component {
  render() {
    return (
        <h1>Count: {this.props.params.count}</h1>
    )
  }
}

export default Counter;