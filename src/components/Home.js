import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          Home
        </div>
        <div className="card-body">
          <h4 className="card-title">Developer. Puzzler. Nature(r).</h4>
          <p className="card-text">I like stuff and I like things.</p>
          <Link to="/portfolio" className="btn btn-primary">Check Out My Portfolio</Link>
        </div>
        <div className="card-footer text-muted">
          I also like to do stuff with things.
        </div>
      </div>
    )
  }
}
