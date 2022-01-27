import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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

        <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales" component={lazy(() => import('./pages/ParametrosPrincipales/GestionSucursales'))} />
        <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales/editar/:codigo" component={lazy(() => import('./pages/ParametrosPrincipales/EditarSucursal'))} />
        <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales/nueva" component={lazy(() => import('./pages/ParametrosPrincipales/NuevaSucursal'))} />

        
        <DashboardTemplate exact path="/usuarios/gestionUsuarios" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/GestionUsuarios'))} />
        <DashboardTemplate exact path="/usuarios/gestionUsuarios/nuevo" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/FormUsuNew'))} />
        <DashboardTemplate exact path="/usuarios/gestionUsuarios/editar/:id" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/GestionUsuariosEdit'))} />
        
        <DashboardTemplate exact path="/usuarios/gestionDePerfiles" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesSearch'))} />
        <DashboardTemplate exact path="/usuarios/gestionDePerfiles/editar/:id" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesEdit'))} />
        <DashboardTemplate exact path="/usuarios/gestionDePerfiles/nueva" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesNew'))} />

        <DashboardTemplate exact path="/movimientos/IPM" component={lazy(() => import('./pages/MovimientosIPM'))} />
        <DashboardTemplate exact path="/movimientos/IPM/detalles/:id" component={lazy(() => import('./pages/MovimientosIPM/DetalleMovimientoIPM'))} />
        <DashboardTemplate exact path="/movimientos/IPM/detalles/:id/:registro" component={lazy(() => import('./pages/MovimientosIPM/DetalleRegistroIPM'))} />


        <DashboardTemplate exact path="/movimientos/CTF" component={lazy(() => import('./pages/Movimientos'))} />

        <DashboardTemplate exact path="/emision/movimientos" component={lazy(() => import('./pages/Emision'))} />
        <DashboardTemplate exact path="/emision/socios" component={lazy(() => import('./pages/Emision'))} />

        <DashboardTemplate exact path="/parametria" component={lazy(() => import('./pages/Parametria'))} />

        <DashboardTemplate exact path="/adquirencia" component={lazy(() => import('./pages/Adquirencia'))} />

        <DashboardTemplate exact path="/ayuda" component={lazy(() => import('./pages/Ayuda'))} />


        <DashboardTemplate exact path="/rodrigo" component={lazy(() => import('./pages/Page1'))} />

        {/* { routes.map((route, index) => <DashboardTemplate exact path={route.path} component={route.page} key={index} /> ) } */}

      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
