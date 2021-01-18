import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from './context'

import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import Lyrics from './components/tracks/Lyrics';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <React.Fragment>
          <Navbar/>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
