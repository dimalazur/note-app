import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Notes } from './components/notes';
import { SignUp } from './components/signup';
import { SignIn } from './components/signin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route exact path="/auth/sing-up" component={SignUp} />
            <Route exact path="/auth/sing-in" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
