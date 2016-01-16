import React from 'react';
import { Link } from 'react-router';

class HelloWorld extends React.Component {
  render() {
    return (
        <div>
        <h1>Hello World</h1>
        <p>
        <Link to={'/counter/20'}>
            This is a link
        </Link>
        </p>
        </div>
    )
  }
}

export default HelloWorld;