import React from 'react';
import { Link } from 'react-router';

class HelloWorld extends React.Component {
  render() {
    return (
        <div>
        <h1>Hello World</h1>
        <p>
        <Link to='/counter'>This is a link</Link>
        </p>
        {this.props.children}
        </div>
    )
  }
}

export default HelloWorld;