import { Ordering, Paginated } from "..";

function ProductsGetRequest() {
    this.Descripcion = "Descripcion";
    this.IdProducto = "IdProducto";
    this.IsActive = "IsActive";
    this.OrderingDTO = new Ordering;
    this.PaginatedDTO = new Paginated;
}

// ProductsGetRequest.prototype = {
//     OrderingDTO: new Ordering,
//     PaginatedDTO: new Paginated,
// }


export default ProductsGetRequest