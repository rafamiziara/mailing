import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Thanks from './pages/Thanks';
import SurveyNew from './pages/SurveyNew';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/thanks" component={Thanks} />
        </div>
      </BrowserRouter>
    </div>
  );
};