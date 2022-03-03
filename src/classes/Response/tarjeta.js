function TarjetaResponse(value) {
    this.FechaGeneracion = value.fechaGeneracion;
    this.IdAdicional = value.idAdicional;
    this.IdAuditoria = value.idAuditoria;
    this.IdCuenta = value.idCuenta;
    this.IdEntidad = value.idEntidad;
    this.IdEstado = value.idEstado;
    this.IdEstadoTipo = value.idEstadoTipo;
    this.IdTarjeta = value.idTarjeta;
    this.NumeroTarjeta = value.numeroTarjeta;
    this.PinInvalidos = value.pinInvalidos;
    this.PinOffset = value.pinOffset;
    this.RowVersion = value.rowVersion;
    this.Secuencia = value.secuencia;
    this.SoporteFisico = value.soporteFisico;
    this.Vencimiento = value.vencimiento;
    this.VigenciaDesde = value.vigenciaDesde;
    this.Socio = value.socio;
    this.Sucursal = value.sucursal;
    this.FechaEmbozado = value.fechaEmbozado;
    this.NroTarjetaEnmascarado = value.nroTarjetaEnmascarado;
}

export default TarjetaResponse