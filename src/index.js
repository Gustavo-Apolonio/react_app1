import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter,
         Switch,
         Route,
         Link }
  from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/pagina1" component={Page1} />
        <Route path="/pagina2" component={Page2} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
