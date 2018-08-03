import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Pages from './pages';

class Routers extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Pages.Login}/>
        </Switch>
      </Router>
    );
  }

}

export default Routers;
