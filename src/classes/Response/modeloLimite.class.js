function ModeloLimiteResponse(model) {
    this.IdModeloLimite = model.idModeloLimite;
    this.Descripcion = model.descripcion;
    this.IdEstadoTipo = model.idEstadoTipo;
    this.IdEstado = model.idEstado;
    this.ModoAplicarPorcentaje = model.modoAplicarPorcentaje;
    this.PorcentajeAdelanto = model.porcentajeAdelanto;
    this.RowVersion = model.rowVersion;
}

export default ModeloLimiteResponse