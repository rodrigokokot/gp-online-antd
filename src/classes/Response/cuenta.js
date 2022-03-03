import { GruposAfinidadResponse, ProductosResponse, TipoProductoResponse, SucursalResponse, PosicionImpositivaResponse, SocioResponse, DomicilioCorrespondenciaResponse } from ".";

function CuentasResponse(cuenta) {
    this.IdCuentaExterna = cuenta.idCuentaExterna;
    this.FechaAlta = cuenta.fechaAlta;
    this.FechaEstado = cuenta.fechaEstado;
    this.IdCuenta = cuenta.idCuenta;
    this.IdMarca = cuenta.idMarca;
    this.IdCuentaEmpresa = cuenta.idCuentaEmpresa;
    this.IdDomicilioCorrespondencia = cuenta.idDomicilioCorrespondencia;
    this.IdEntidad = cuenta.idEntidad;
    this.IdEstado = cuenta.idEstado;
    this.IdEstadoTipo = cuenta.idEstadoTipo;
    this.IdGrupoAfinidad = cuenta.idGrupoAfinidad;
    this.IdModPrecios = cuenta.idModPrecios;
    this.IdPosicionImpositiva = cuenta.idPosicionImpositiva;
    this.IdProducto = cuenta.idProducto;
    this.IdSucursal = cuenta.idSucursal;
    this.IdTipoProducto = cuenta.idTipoProducto;
    this.Renovar = cuenta.renovar;
    this.SoporteFisico = cuenta.soporteFisico;
    this.RowVersion = cuenta.rowVersion;
    this.EstadoTarjeta = cuenta.estadoTarjeta;
    this.GrupoAfinidad = new GruposAfinidadResponse(cuenta.grupoAfinidad);
    this.Producto = new ProductosResponse(cuenta.producto);
    this.TipoProducto = new TipoProductoResponse(cuenta.tipoProducto);
    this.Sucursal = new SucursalResponse(cuenta.sucursal);
    this.PosicionImpositiva = new PosicionImpositivaResponse(cuenta.posicionImpositiva);
    this.Socio = new SocioResponse(cuenta.socio);
    this.Socios = cuenta.socios;
    this.DomicilioCorrespondencia = new DomicilioCorrespondenciaResponse(cuenta.domicilioCorrespondencia);
    this.CuentasMonedas = cuenta.cuentasMonedas;
    this.EntregaTarjeta = cuenta.entregaTarjeta;
    this.TarjetaASucursal = cuenta.tarjetaASucursal;
    this.Marca = cuenta.marca;
}

export default CuentasResponse
