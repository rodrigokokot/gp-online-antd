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

        <DashboardTemplate exact path="/gestionAprobaciones" component={lazy(() => import('./pages/GestionAprobaciones'))} />

        <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales" component={lazy(() => import('./pages/GestionSucursales'))} />
        <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales/editarSucursal" component={lazy(() => import('./pages/GestionSucursales'))} />

        <DashboardTemplate exact path="/usuarios/gestionDeUsuarios" component={lazy(() => import('./pages/Usuarios'))} />
        <DashboardTemplate exact path="/usuarios/gestionDePerfiles" component={lazy(() => import('./pages/Usuarios'))} />

        <DashboardTemplate exact path="/movimientos/IPM" component={lazy(() => import('./pages/Movimientos'))} />
        <DashboardTemplate exact path="/movimientos/CTF" component={lazy(() => import('./pages/Movimientos'))} />

        <DashboardTemplate exact path="/emision/movimientos" component={lazy(() => import('./pages/Emision'))} />
        <DashboardTemplate exact path="/emision/socios" component={lazy(() => import('./pages/Emision'))} />

        <DashboardTemplate exact path="/parametria" component={lazy(() => import('./pages/Parametria'))} />

        <DashboardTemplate exact path="/adquirencia" component={lazy(() => import('./pages/Adquirencia'))} />

        <DashboardTemplate exact path="/ayuda" component={lazy(() => import('./pages/Ayuda'))} />


        {/* { routes.map((route, index) => <DashboardTemplate exact path={route.path} component={route.page} key={index} /> ) } */}

      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
