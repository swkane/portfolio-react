import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          Contact
        </div>
        <div className="card-body">
          <h4 className="card-title">My Info</h4>
          <p className="card-text">Phone: (123) 456-7890</p>
          <p className="card-text">Email: email@aol.com</p>
          <p className="card-text">Fax: Why would I have a fax machine</p>
        </div>
        <div className="card-footer text-muted">
          <a href="http://facebook.com">facebook</a>  
          <a href="http://github.com">github</a>
        </div>
      </div>
    )
  }
}
