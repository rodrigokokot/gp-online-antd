import { Ordering, Paginated } from "..";

function GruposAfinidadGetRequest() {
    this.Descripcion = "Descripcion";
    this.IdGrupoAfinidad = "IdGrupoAfinidad";
    this.IdTipoProducto = "IdTipoProducto";
    this.OrderingDTO = new Ordering;
    this.PaginatedDTO = new Paginated;
}

export default GruposAfinidadGetRequest
