import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, Button } from 'reactstrap';
import image from '../web-app.png';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="main">
        <Card className="item">
          <CardImg top width="100%" src={image} width="200" alt="Card image cap" />
          <CardBlock>
            <CardTitle>Responsive Web App</CardTitle>
            <CardText>I totally made this thing.</CardText>
            <Button>This button does nothing</Button>
          </CardBlock>
        </Card>
        <Card className="item">
          <CardImg top width="100%" src={image} width="200" alt="Card image cap" />
          <CardBlock>
            <CardTitle>Responsive Web App</CardTitle>
            <CardText>I totally made this thing too.</CardText>
            <Button>This button does nothing</Button>
          </CardBlock>
        </Card>
        <Card className="item">
          <CardImg top width="100%" src={image} width="200" alt="Card image cap" />
          <CardBlock>
            <CardTitle>Responsive Web App</CardTitle>
            <CardText>I just contributed on this.</CardText>
            <Button>This button does nothing</Button>
          </CardBlock>
        </Card>
    </div>
    )
  }
}
