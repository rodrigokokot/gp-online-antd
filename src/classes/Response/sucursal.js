function SucursalResponse(suc) {
    this.IdSucursal = suc.idSucursal;
    this.Descripcion = suc.descripcion;
    this.IdEstado = suc.idEstado;
    this.RowVersion = suc.rowVersion;
    this.Estado = suc.estado;
    this.Domicilio = suc.domicilio;
}

export default SucursalResponse
