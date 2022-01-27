const columnsRegistroCTF = [
  {
    name: "Contenido",
    selector: (row) => row.contenido,
    sortable: true,
  },
  {
    name: "Start",
    selector: (row) => row.start,
    sortable: true,
  },
  {
    name: "Length",
    selector: (row) => row.length,
    sortable: true,
  },
  {
    name: "end",
    selector: (row) => row.end,
    sortable: true,
  },
  {
    name: "Alias_Campo",
    selector: (row) => row.alias,
    sortable: true,
  }
];

const dataRegistroCTF = [
  {
    contenido: "Transaction Code",
    start: "180660",
    length: "Entrada",
    end: '20/07/2021 00:33:24',
    alias:'287'
  },{
    contenido: "Transaction Code",
    start: "180660",
    length: "Entrada",
    end: '20/07/2021 00:33:24',
    alias:'287'
  },{
    contenido: "Transaction Code",
    start: "180660",
    length: "Entrada",
    end: '20/07/2021 00:33:24',
    alias:'287'
  },
];

export { dataRegistroCTF, columnsRegistroCTF };
