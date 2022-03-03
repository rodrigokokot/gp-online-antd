import { PersonaResponse, TarjetaResponse } from ".";

function SocioResponse(value) {
    this.FechaAlta = value.fechaAlta;
    this.FechaEstado = value.fechaEstado;
    this.IdAdicional = value.idAdicional;
    this.IdCuenta = value.idCuenta;
    this.IdEntidad = value.idEntidad;
    this.IdEstado = value.idEstado;
    this.IdEstadoTipo = value.idEstadoTipo;
    this.IdPersona = value.idPersona;
    this.IdTarjetaVigente = value.idTarjetaVigente;
    this.NombreEmbozado = value.nombreEmbozado;
    this.Renovar = value.renovar;
    this.RowVersion = value.rowVersion;
    this.Persona = new PersonaResponse(value.persona);
    this.Tarjeta = new TarjetaResponse(value.tarjeta);
    this.Cuenta = value.Cuenta;
    this.Producto = value.producto;
}

export default SocioResponse