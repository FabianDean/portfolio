import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import withLayout from './components/withLayout';
import Home from './pages/Home';
import './styles/app.module.css';

const App = () => {
  const theme = {
    global: {
      font: {
        size: '62.5%',
      },
    },
  };

  return (
    <Grommet theme={theme} >
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Grommet >
  );
}

export default withLayout(App);
