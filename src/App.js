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

// id from url


function App() {
  // id from url
  
  return (
    

    <Router>
      {/* <Suspense fallback={ "Cargando..." }> */}
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <LoginTemplate exact path="/login" component={Login} />
          <DashboardTemplate exact path="/page1" component={ lazy(() => import('./pages/Page1'))}  />
          <DashboardTemplate exact path="/home" component={ lazy(() => import('./pages/Home'))}  />
          <DashboardTemplate exact path="/gestionAprobaciones" component={ lazy(() => import('./pages/GestionAprobaciones'))}  />
          <DashboardTemplate exact path="/ayuda" component={ lazy(() => import('./pages/Ayuda'))}  />
          <DashboardTemplate exact path="/gestionSucursales" component={ lazy(() => import('./pages/GestionSucursales/GestionSucursales'))}  />
          <DashboardTemplate exact path="/gestionSucursales/:type" component={ lazy(() => import('./pages/GestionSucursales/GestionSucursalesEdit'))}  />
          {/* { routes.map((route, index) => <DashboardTemplate exact path={route.path} component={route.page} key={index} /> ) } */}

        </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
