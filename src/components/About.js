import React from 'react';
import image from '../chaco.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          Home
        </div>
        <div className="card-body">
          <h4 className="card-title">My Life</h4>
          <p className="card-text">I grew up in Indianapolis and attended The Kelley School of Business in Bloomington, IN</p>
          <img src={image} alt="chaco" width="200px" />
        </div>
        <div className="card-footer text-muted">
          I later attended The Iron Yard where I honed my Web Development skills.
        </div>
      </div>
    )
  }
}
