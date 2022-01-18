import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import routes from "./router/routesAdmin";
import './App.less';

//components

// templates
import LoginTemplate from './templates/Login';
import DashboardTemplate from './templates/Dashboard';


// pages
import Login from './pages/Login'

//const NotFound404 = lazy(() => import('./components/pages/NotFound404'));


function App() {
  return (
    <Router>
      {/* <Suspense fallback={ "Cargando..." }> */}
      <Switch>
        <LoginTemplate exact path="/login" component={Login} />

        <Route exact path="/"><Redirect to="/login"></Redirect></Route>
        <DashboardTemplate exact path="/home" component={lazy(() => import('./pages/Home'))} />
        <DashboardTemplate exact path="/page1" component={lazy(() => import('./pages/Page1'))} />
        <DashboardTemplate exact path="/gestionAprobaciones" component={lazy(() => import('./pages/GestionAprobaciones'))} />



        {/* { routes.map((route, index) => <DashboardTemplate exact path={route.path} component={route.page} key={index} /> ) } */}

      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
