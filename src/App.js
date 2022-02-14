import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.less';
import { AuthProvider } from './context/authContext';
//components

// templates
import LoginTemplate from './templates/Login';
import DashboardTemplate from './templates/Dashboard';

// locales
import './i18n'

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
          <DashboardTemplate exact path="/parametrosPrincipales/gestionDeSucursales" component={lazy(() => import('./pages/ParametrosPrincipales/GestionSucursales'))} />
          <DashboardTemplate exact path="/parametrosPrincipales/gestionDeSucursales/editarSucursal=:codigo" component={lazy(() => import('./pages/ParametrosPrincipales/EditarSucursal'))} />
          <DashboardTemplate exact path="/parametrosPrincipales/gestionDeSucursales/crearSucursal" component={lazy(() => import('./pages/ParametrosPrincipales/NuevaSucursal'))} />

          {/* Usuarios */}
          <DashboardTemplate exact path="/usuarios/gestionDeUsuarios" component={lazy(() => import('./pages/Usuarios/GestionUsuarios'))} />
          <DashboardTemplate exact path="/usuarios/gestionDeUsuarios/crearUsuario" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/FormUsuNew'))} />
          <DashboardTemplate exact path="/usuarios/gestionDeUsuarios/editarUsuario=:usuario" component={lazy(() => import('./pages/Usuarios/GestionUsuarios/GestionUsuariosEdit'))} />

          <DashboardTemplate exact path="/usuarios/gestionDePerfiles" component={lazy(() => import('./pages/Usuarios/GestionPerfiles'))} />
          <DashboardTemplate exact path="/usuarios/gestionDePerfiles/editarPerfil=:id" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesEdit'))} />
          <DashboardTemplate exact path="/usuarios/gestionDePerfiles/crearPerfil" component={lazy(() => import('./pages/Usuarios/GestionPerfiles/GestionPerfilesNew'))} />

          {/* Movimientos */}
          <DashboardTemplate exact path="/movimientos/IPM" component={lazy(() => import('./pages/Movimientos/MovimientosIPM'))} />
          <DashboardTemplate exact path="/movimientos/IPM/detalle=:id" component={lazy(() => import('./pages/Movimientos/MovimientosIPM/DetalleMovimientoIPM'))} />
          <DashboardTemplate exact path="/movimientos/IPM/detalle=:id/registro=:registro" component={lazy(() => import('./pages/Movimientos/MovimientosIPM/DetalleRegistroIPM'))} />

          <DashboardTemplate exact path="/movimientos/CTF" component={lazy(() => import('./pages/Movimientos/MovimientosCTF'))} />
          <DashboardTemplate exact path="/movimientos/CTF/detalle=:id" component={lazy(() => import('./pages/Movimientos/MovimientosCTF/DetalleMovimientoCTF'))} />
          <DashboardTemplate exact path="/movimientos/CTF/detalle=:id/registro=:registro" component={lazy(() => import('./pages/Movimientos/MovimientosCTF/DetalleRegistroCTF'))} />

          {/* Emision */}
                        {/* Movimientos */}
          <DashboardTemplate exact path="/emision/movimientos/autorizaciones" component={lazy(() => import('./pages/Emision/Movimientos/Autorizaciones'))} />
          <DashboardTemplate exact path="/emision/movimientos/autorizaciones/crearAutorizacion" component={lazy(() => import('./pages/Emision/Movimientos/Autorizaciones/AutorizacionesNew'))} />
          <DashboardTemplate exact path="/emision/movimientos/autorizaciones/detalle=:id" component={lazy(() => import('./pages/Emision/Movimientos/Autorizaciones/AutorizacionesView'))} />

          <DashboardTemplate exact path="/emision/movimientos/cargas" component={lazy(() => import('./pages/Emision/Movimientos/Cargas'))} />

          <DashboardTemplate exact path="/emision/movimientos/consumos" component={lazy(() => import('./pages/Emision/Movimientos/Consumos'))} />
          <DashboardTemplate exact path="/emision/movimientos/consumos/detalle=:id" component={lazy(() => import('./pages/Emision/Movimientos/Consumos/ConsultaConsumos'))} />
                        
                        {/* Cargos y Ajustes */}
          <DashboardTemplate exact path="/emision/cargosAjustes/cambioDeEstado" component={lazy(() => import('./pages/Emision/CargosAjustes/CambioDeEstado'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/cambioDeEstado/detalle=:id" component={lazy(() => import('./pages/Emision/CargosAjustes/CambioDeEstado/CambioDeEstadoDetalle'))} />


          <DashboardTemplate exact path="/emision/cargosAjustes/tiposDeCargos" component={lazy(() => import('./pages/Emision/CargosAjustes/TiposDeCargos'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/tiposDeCargos/editarTipoDeCargo=:id" component={lazy(() => import('./pages/Emision/CargosAjustes/TiposDeCargos/TiposDeCargosEdit'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/tiposDeCargos/crearTipoDeCargo" component={lazy(() => import('./pages/Emision/CargosAjustes/TiposDeCargos/TiposDeCargoCrear'))} />

          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductos" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductos'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductos/editarCargoPorProducto=:id" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductos/CargosPorProductosEditar'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductos/crearCargoPorProducto" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductos/CargosPorProductosCrear'))} />

          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductosMovimientos" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductosMovimientos'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductosMovimientos/editarCargoPorProductoYMovimiento=:producto" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductosMovimientos/CPMovimientoEdit'))} /> 
          
          <DashboardTemplate exact path="/emision/cargosAjustes/publicacionEnBoletin" component={lazy(() => import('./pages/Emision/CargosAjustes/PublicacionEnBoletin'))} />
          <DashboardTemplate exact path="/emision/cargosAjustes/publicacionEnBoletin/detalle:id" component={lazy(() => import('./pages/Emision/CargosAjustes/PublicacionEnBoletin/ConsultaBoletin'))} />
          
          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductosAfinidad" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductosAfinidad'))} />          
          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductosAfinidad/crearCargoPorProductoYAfinidad" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductosAfinidad/CargosPorProductosAfinidadNew'))} />          
          <DashboardTemplate exact path="/emision/cargosAjustes/cargosPorProductosAfinidad/editarCargoPorProductoYAfinidad=:id" component={lazy(() => import('./pages/Emision/CargosAjustes/CargosPorProductosAfinidad/CargosPorProdutosAfinidadEdit'))} />          
          
          <DashboardTemplate exact path="/emision/cargosAjustes/consultaDeLiquidaciones" component={lazy(() => import('./pages/Emision/CargosAjustes/ConsultaDeLiquidaciones'))} />
          

                        {/* Socios */}
          <DashboardTemplate exact path="/emision/socios/cuentas" component={lazy(() => import('./pages/Emision/Socios/Cuentas'))} />
          <DashboardTemplate exact path="/emision/socios/cuentas/editarCuenta:idcuenta" component={lazy(() => import('./pages/Emision/Socios/Cuentas/GestionCuentaEdit'))} />
          <DashboardTemplate exact path="/emision/socios/cuentas/crearCuenta" component={lazy(() => import('./pages/Emision/Socios/Cuentas/GestionCuentaNew'))} />

          <DashboardTemplate exact path="/emision/socios/avisosDeViajes" component={lazy(() => import('./pages/Emision/Socios/AvisosViajes'))} />
          <DashboardTemplate exact path="/emision/socios/avisosDeViajes/editarAvisosDeViajes=:id" component={lazy(() => import('./pages/Emision/Socios/AvisosViajes/AvisosViajesEdit'))} />

          <DashboardTemplate exact path="/emision/socios/movimientosDeCuenta" component={lazy(() => import('./pages/Emision/Socios/MovimientosDeCuenta'))} />

          <DashboardTemplate exact path="/emision/socios/adicionales" component={lazy(() => import('./pages/Emision/Socios/GestionAdicionales'))} />
          <DashboardTemplate exact path="/emision/socios/adicionales/crear=:id" component={lazy(() => import('./pages/Emision/Socios/GestionAdicionales/GestionAdicionalesNew'))} />

          <DashboardTemplate exact path="/emision/socios/tarjetas" component={lazy(() => import('./pages/Emision/Socios/Tarjetas'))} />
          <DashboardTemplate exact path="/emision/socios/tarjetas/detalle=:id" component={lazy(() => import('./pages/Emision/Socios/Tarjetas/TarjetasView'))} />
          <DashboardTemplate exact path="/emision/socios/tarjetas/detalle=:id/historial" component={lazy(() => import('./pages/Emision/Socios/Tarjetas/TarjetasHistory'))} />

          <DashboardTemplate exact path="/emision/socios/plasticos" component={lazy(() => import('./pages/Emision/Socios/Plasticos'))} />

          {/* Parametria */}
          <DashboardTemplate exact path="/parametria/modificarLimite" component={lazy(() => import('./pages/Parametria/ModificarLimite'))} />
          <DashboardTemplate exact path="/parametria/modificarLimite/editar:cuenta" component={lazy(() => import('./pages/Parametria/ModificarLimite/ModificarLimite'))} />
          
          <DashboardTemplate exact path="/parametria/tarjetaInstantanea" component={lazy(() => import('./pages/Parametria/TarjetaInstantanea'))} />
          <DashboardTemplate exact path="/parametria/tarjetaInstantanea/nueva" component={lazy(() => import('./pages/Parametria/TarjetaInstantanea/TarjetaInstantaneaNew'))} />
          <DashboardTemplate exact path="/parametria/tarjetaInstantanea/nueva2" component={lazy(() => import('./pages/Parametria/TarjetaInstantanea/TarjetaInstantaneaNew2'))} />
          <DashboardTemplate exact path="/parametria/tarjetaInstantanea/nueva3" component={lazy(() => import('./pages/Parametria/TarjetaInstantanea/TarjetaInstantaneaNew3'))} />

          <DashboardTemplate exact path="/adquirencia" component={lazy(() => import('./pages/Adquirencia'))} />

          <DashboardTemplate exact path="/ayuda" component={lazy(() => import('./pages/Ayuda/'))} />


          <DashboardTemplate exact path="/rodrigo" component={lazy(() => import('./pages/Page1'))} />

          {/* { routes.map((route, index) => <DashboardTemplate exact path={route.path} component={route.page} key={index} /> ) } */}

        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
