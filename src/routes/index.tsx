import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/index'));
const Notfound = lazy(() => import('../pages/notfound/index'));

const Routes: React.FC = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Switch>
      <Route path="/sistema" exact component={Home} />
      <Route path="*" exact component={Notfound} />
    </Switch>
  </Suspense>
);

export default Routes;
