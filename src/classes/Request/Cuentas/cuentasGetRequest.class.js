import { Ordering, Paginated } from "..";

function CuentasGetRequest() {
    this.IdCuentaExterna = "IdCuentaExterna";
    this.Tarjeta = "Tarjeta";
    this.NroDocumento = "NroDocumento";
    this.Nombre = "Nombre";
    this.Apellido = "Apellido";
    this.OrderingDTO = new Ordering;
    this.PaginatedDTO = new Paginated;
    this.IdGrupoAfinidad = "IdGrupoAfinidad";
    this.IdCuenta = "IdCuenta";
    this.IdTipoProducto = "IdTipoProducto";
    this.IdProducto = "IdProduct";
}

export default CuentasGetRequest
