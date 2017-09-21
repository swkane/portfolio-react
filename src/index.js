import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import References from './components/References';
import BaseLayout from './components/BaseLayout';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/references" component={References} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,document.getElementById('root'));
registerServiceWorker();
