function PosicionImpositivaResponse(imp) {
    this.IdPais = imp.idPais;
    this.IdPosicionImpositiva = imp.idPosicionImpositiva;
    this.Descripcion = imp.descripcion;
    this.Alicuota = imp.alicuota;
    this.AlicuotaReduc = imp.alicuotaReduc;
    this.RowVersion = imp.rowVersion;
}

export default PosicionImpositivaResponse