import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.less';
import { AuthProvider } from './context/authContext';
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
      <Switch>
        <Route exact path="/"><Redirect to="/login" /></Route>
        <LoginTemplate exact path="/login" component={Login} />
      </Switch>
      <AuthProvider>
        <Switch>
          <DashboardTemplate exact path="/gestionAprobaciones" component={lazy(() => import('./pages/GestionAprobaciones'))} />
          {/* Parametros principales */}
          <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales" component={lazy(() => import('./pages/ParametrosPrincipales/GestionSucursales'))} />
          <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales/editar/:codigo" component={lazy(() => import('./pages/ParametrosPrincipales/EditarSucursal'))} />
          <DashboardTemplate exact path="/parametrosPrincipales/gestionSucursales/nuevo" component={lazy(() => import('./pages/ParametrosPrincipales/NuevaSucursal'))} />
          
          {/* Usuarios */}
          <DashboardTemplate exact path="/usuarios/gestionUsuarios" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/GestionUsuarios'))} />
          <DashboardTemplate exact path="/usuarios/gestionUsuarios/crear" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/FormUsuNew'))} />
          <DashboardTemplate exact path="/usuarios/gestionUsuarios/editar/:usuario" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/GestionUsuariosEdit'))} />

          <DashboardTemplate exact path="/usuarios/gestionDePerfiles" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesSearch'))} />
          <DashboardTemplate exact path="/usuarios/gestionDePerfiles/editar/:id" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesEdit'))} />
          <DashboardTemplate exact path="/usuarios/gestionDePerfiles/nuevo" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesNew'))} />

          {/* Movimientos */}
          <DashboardTemplate exact path="/movimientos/IPM" component={lazy(() => import('./pages/Movimientos/MovimientosIPM'))} />
          <DashboardTemplate exact path="/movimientos/IPM/detalles/:id" component={lazy(() => import('./pages/Movimientos/MovimientosIPM/DetalleMovimientoIPM'))} />
          <DashboardTemplate exact path="/movimientos/IPM/detalles/:id/:registro" component={lazy(() => import('./pages/Movimientos/MovimientosIPM/DetalleRegistroIPM'))} />

          <DashboardTemplate exact path="/movimientos/CTF" component={lazy(() => import('./pages/Movimientos/MovimientosCTF'))} />
          <DashboardTemplate exact path="/movimientos/CTF/detalles/" component={lazy(() => import('./pages/Movimientos/MovimientosCTF/DetalleMovimientoCTF'))} />
          <DashboardTemplate exact path="/movimientos/CTF/detalles/:id" component={lazy(() => import('./pages/Movimientos/MovimientosCTF/DetalleRegistroCTF'))} />

          {/* Emision */}
                        {/* Movimientos */}
          <DashboardTemplate exact path="/emision/movimientos/autorizaciones" component={lazy(() => import('./pages/Emision/Movimientos/Autorizaciones/AutorizacionesSearch'))} />
          <DashboardTemplate exact path="/emision/movimientos/autorizaciones/nuevo" component={lazy(() => import('./pages/Emision/Movimientos/Autorizaciones/AutorizacionesNew'))} />
          <DashboardTemplate exact path="/emision/movimientos/autorizaciones/ver/:id" component={lazy(() => import('./pages/Emision/Movimientos/Autorizaciones/AutorizacionesView'))} />

          <DashboardTemplate exact path="/emision/movimientos/cargas" component={lazy(() => import('./pages/Emision/Movimientos/Cargas'))} />

          <DashboardTemplate exact path="/emision/movimientos/consumos" component={lazy(() => import('./pages/Emision/Movimientos/Consumos'))} />
          <DashboardTemplate exact path="/emision/movimientos/consumos/consultaDeConsumo/:id" component={lazy(() => import('./pages/Emision/Movimientos/Consumos/ConsultaConsumos'))} />
                        
                        {/* Cargos y Ajustes */}
          <DashboardTemplate exact path="/emision/cargosAjustes/cambioDeEstado" component={lazy(() => import('./pages/Emision/CargosAjustes/CambioDeEstado'))} />

          <DashboardTemplate exact path="/emision/cargosAjustes/tiposDeCargos" component={lazy(() => import('./pages/Emision/CargosAjustes/TiposDeCargos'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/tiposDeCargos/editar/:id" component={lazy(() => import('./pages/Emision/CargosAjustes/TiposDeCargos/TiposDeCargosEdit'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/tiposDeCargos/crear" component={lazy(() => import('./pages/Emision/CargosAjustes/TiposDeCargos/TiposDeCargoCrear'))} />

          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductos" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductos'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductosMovimientos" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductosMovimientos'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/consultaDeLiquidaciones" component={lazy(() => import('./pages/Emision/CargosAjustes/ConsultaDeLiquidaciones'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/publicacionEnBoletin" component={lazy(() => import('./pages/Emision/CargosAjustes/PublicacionEnBoletin'))} />

                        {/* Socios */}
          <DashboardTemplate exact path="/emision/socios/cuentas" component={lazy(() => import('./pages/Emision/Socios/Cuentas/GestionCuentas'))} />
          <DashboardTemplate exact path="/emision/socios/cuentas/gestionDeCuentas/editar/:idcuenta" component={lazy(() => import('./pages/Emision/Socios/Cuentas/GestionCuentaEdit'))} />
          <DashboardTemplate exact path="/emision/socios/cuentas/gestionDeCuentas/nueva" component={lazy(() => import('./pages/Emision/Socios/Cuentas/GestionCuentaNew'))} />

          <DashboardTemplate exact path="/emision/socios/avisosDeViajes" component={lazy(() => import('./pages/Emision/Socios/AvisosViajes/AvisosViajes'))} />
          <DashboardTemplate exact path="/emision/socios/avisosDeViajes/editar/:id" component={lazy(() => import('./pages/Emision/Socios/AvisosViajes/AvisosViajesEdit'))} />

          <DashboardTemplate exact path="/emision/socios/movimientosDeCuenta" component={lazy(() => import('./pages/Emision/Socios/MovimientosDeCuenta'))} />

          <DashboardTemplate exact path="/emision/socios/adicionales" component={lazy(() => import('./pages/Emision/Socios/GestionAdicionales/GestionAdicionalesSearch'))} />
          <DashboardTemplate exact path="/emision/socios/adicionales/nueva/:id" component={lazy(() => import('./pages/Emision/Socios/GestionAdicionales/GestionAdicionalesNew'))} />

          <DashboardTemplate exact path="/emision/socios/tarjetas" component={lazy(() => import('./pages/Emision/Socios/Tarjetas/TarjetasSearch'))} />
          {/* Parametria */}
          <DashboardTemplate exact path="/parametria/modificarLimite" component={lazy(() => import('./pages/Parametria/ModificarLimite'))} />
          <DashboardTemplate exact path="/parametria/modificarLimite/editar/:cuenta" component={lazy(() => import('./pages/Parametria/ModificarLimite/ModificarLimite'))} />
          
          <DashboardTemplate exact path="/adquirencia" component={lazy(() => import('./pages/Adquirencia'))} />

          <DashboardTemplate exact path="/ayuda" component={lazy(() => import('./pages/Ayuda'))} />


          <DashboardTemplate exact path="/rodrigo" component={lazy(() => import('./pages/Page1'))} />

          {/* { routes.map((route, index) => <DashboardTemplate exact path={route.path} component={route.page} key={index} /> ) } */}

        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
