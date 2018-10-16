import React, { Component } from 'react';
import './AppRouter.css';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">        
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
