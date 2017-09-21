import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, Button } from 'reactstrap';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="card main">
      <div className="card-header">
        References
      </div>
        <Card className="item">
          <CardBlock>
            <CardTitle>Barack Obama</CardTitle>
            <CardText>Contact Info: **Censored**</CardText>
            <CardText>"Sam is a fine young man and a great choice for a hire!"</CardText>
          </CardBlock>
        </Card>
        <Card className="item">
          <CardBlock>
            <CardTitle>Fetty Wop</CardTitle>
            <CardText>Contact Info: fetty@wop.com</CardText>
            <CardText>"Sam is my role model and my muse."</CardText>
          </CardBlock>
        </Card>
        <Card className="item">
        <CardBlock>
          <CardTitle>Moana</CardTitle>
          <CardText>Contact Info: Send a Carrier Pidgeon to Fiji</CardText>
          <CardText>"I never would have been able to restore the heart of Tafiti without Sam."</CardText>
        </CardBlock>
        </Card>
    </div>
    )
  }
}
