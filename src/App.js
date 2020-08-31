import React from 'react';
import { Switch, Route } from 'react-router-dom';
import withLayout from './components/withLayout';
import Home from './pages/Home';
import './styles/app.module.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default withLayout(App);
