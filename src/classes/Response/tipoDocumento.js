function TipoDocumentoResponse(value) {
    this.IdTipoDocumento = value.idTipoDocumento;
    this.Descripcion = value.descripcion;
    this.IdPais = value.idPais;
    this.RowVersion = value.rowVersion;
    this.IdEstado = value.idEstado;
}

export default TipoDocumentoResponse