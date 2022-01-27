const columnsDetalleRegistroIPM = [
  {
    name: "Campo / PDS",
    selector: (row) => row.campo,
    sortable: true,
  },
  {
    name: "Valor",
    selector: (row) => row.valor,
    sortable: true,
  },
];

const dataDetalleRegistroIPM = [
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
  {
    campo: "MTI - Message Type Identifier",
    valor: "1231",
  },
];

export { dataDetalleRegistroIPM, columnsDetalleRegistroIPM };
