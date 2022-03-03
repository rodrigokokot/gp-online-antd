function DomicilioCorrespondenciaResponse(value) {
    this.IdDomicilio = value.idDomicilio;
    this.IdPais = value.idPais;
    this.IdProvincia = value.idProvincia;
    this.IdCodigoPostal = value.idCodigoPostal;
    this.Direccion = value.direccion;
    this.Numero = value.numero;
    this.Piso = value.piso;
    this.Depto = value.depto;
    this.EntreCalles = value.entreCalles;
    this.Referencia = value.referencia;
    this.Telefono = value.telefono;
    this.Barrio = value.barrio;
    this.Localidad = value.localidad;
    this.ReplicaDomicilioLegal = value.replicaDomicilioLegal;
    this.RowVersion = value.rowVersion;
}

export default DomicilioCorrespondenciaResponse