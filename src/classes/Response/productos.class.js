import { MarcaResponse, ModeloLimiteResponse, TipoProductoResponse } from "."

function ProductosResponse(product) {
    this.IdProducto = product.idProducto
    this.IdMarca = product.idMarca
    this.Descripcion = product.descripcion
    this.IdTipoProducto = product.idTipoProducto
    this.MesesVigenciaAlta = product.mesesVigenciaAlta
    this.MesesVigenciaRenovacion = product.mesesVigenciaRenovacion
    this.MesesAntesRenovacion = product.mesesAntesRenovacion
    this.EdadMinima = product.edadMinima
    this.EdadMaxima = product.edadMaxima
    this.PrefijoBin = product.prefijoBin
    this.FormatoTarjeta = product.formatoTarjeta
    this.AtributosTarjeta = product.atributosTarjeta
    this.CobraDolares = product.cobraDolares
    this.LimiteDiasHabilitacion = product.limiteDiasHabilitacion
    this.AdmiteAdicional = product.admiteAdicional
    this.OperaInternacional = product.operaInternacional
    this.OperaDebitoAutomatico = product.operaDebitoAutomatico
    this.BloquearAutorizacion = product.bloquearAutorizacion
    this.TieneChip = product.tieneChip
    this.OperaAdelantos = product.operaAdelantos
    this.IdModeloLimite = product.idModeloLimite
    this.RowVersion = product.rowVersion
    this.IdEstado = product.idEstado
    this.ModeloLimite = new ModeloLimiteResponse(product.modeloLimite)
    this.Marca = new MarcaResponse(product.marca)
    this.TipoProducto = new TipoProductoResponse(product.tipoProducto)
    this.ServiceCode = product.serviceCode
    this.OperaCarga = product.operaCarga
    this.EnviaImpuestosParaExterno = product.enviaImpuestosParaExterno
}

export default ProductosResponse
