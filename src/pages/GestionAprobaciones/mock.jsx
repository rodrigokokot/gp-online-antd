import { DownOutlined } from "@ant-design/icons";

const columnsNovelty = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Tipo de novedad",
      selector: (row) => row.new,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Usuario",
      selector: (row) => row.user,
      sortable: true,
    },
    {
      name: "Comentario",
      selector: (row) => row.comment,
      sortable: true,
    },
    {
      name: "Cuenta",
      selector: (row) => row.acount,
      sortable: true,
    },
    {
      name: "Marca",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Producto",
      selector: (row) => row.product,
      sortable: true,
    },
    {
      name: "Sucursal",
      selector: (row) => row.branch,
      sortable: true,
    },
    {
      name: "Cliente",
      selector: (row) => row.client,
      sortable: true,
    },
    {
      cell: (row) => <DownOutlined />,
      allowOverflow: true,
      button: true,
      width: "56px",
    },
  ];
  
  const dataNovelty = [
    {
      id: 23,
      new: "Cambio de estado de tarjeta",
      date: "8/13/2021 11:43 AM",
      user: "Carlos, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tarjeta Individual",
      product: "Tarjeta Individual",
      branch: "Cordoba",
      client: "Candela, Olga Miriam del Valle",
    },
    {
      id: 32,
      new: "Cambio de estado de tarjeta",
      date: "8/13/2021 11:43 AM",
      user: "Pedro, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tarjeta Grupar",
      product: "Tarjeta Grupar",
      branch: "San Juan",
      client: "Candela, Olga Miriam del Valle",
    },
    {
      id: 34,
      new: "Cambio de estado de tarjeta",
      date: "8/13/2021 11:43 AM",
      user: "Juana, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tarjeta Individual",
      product: "Tarjeta Individual",
      branch: "jachal",
      client: "Candela, Olga Miriam del Valle",
    },
    {
      id: 54,
      new: "Cambio de estado de tarjeta",
      date: "8/13/2021 11:43 AM",
      user: "Maria, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tarjeta Individual",
      product: "Tarjeta Individual",
      branch: "Cordoba",
      client: "Candela, Olga Miriam del Valle",
    },
    {
      id: 25,
      new: "Cambio de estado de tarjeta",
      date: "8/13/2021 11:43 AM",
      user: "Juanita, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tarjeta Grupar",
      product: "Tarjeta Grupar",
      branch: "Cordoba",
      client: "Candela, Olga Miriam del Valle",
    },
  ];
  
  const columnsSettins = [
    {
      name: "Marca",
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: "Emisor",
      selector: (row) => row.transmitter,
      sortable: true,
    },
    {
      name: "Comprobante",
      selector: (row) => row.voucher,
      sortable: true,
    },
    {
      name: "Cuenta",
      selector: (row) => row.voucher,
      sortable: true,
    },
    {
      name: "Concepto",
      selector: (row) => row.voucher,
      sortable: true,
    },
    {
      name: "Importe",
      selector: (row) => row.voucher,
      sortable: true,
    },
  ];
  
  const dataSettings = [
    {
      brand: 23,
      transmitter: "Beetlejuice",
      voucher: "1988",
      acount: "23/4/35 23:12",
      concept: "Romero, lucia",
      amount: "-",
      fees: "334252",
      status: "Tareta Grupar",
      confirmation: "Tareta Grupar",
      dateOfProcess: "Cordoba",
    },
    {
      brand: 23,
      transmitter: "Beetlejuice",
      voucher: "1988",
      acount: "23/4/35 23:12",
      concept: "Romero, lucia",
      amount: "-",
      fees: "334252",
      status: "Tareta Grupar",
      confirmation: "Tareta Grupar",
      dateOfProcess: "Cordoba",
    },
    {
      brand: 23,
      transmitter: "Beetlejuice",
      voucher: "1988",
      acount: "23/4/35 23:12",
      concept: "Romero, lucia",
      amount: "-",
      fees: "334252",
      status: "Tareta Grupar",
      confirmation: "Tareta Grupar",
      dateOfProcess: "Cordoba",
    },
    {
      brand: 23,
      transmitter: "Beetlejuice",
      voucher: "1988",
      acount: "23/4/35 23:12",
      concept: "Romero, lucia",
      amount: "-",
      fees: "334252",
      status: "Tareta Grupar",
      confirmation: "Tareta Grupar",
      dateOfProcess: "Cordoba",
    },
  ];

  const filtros = [
    {
      title: "Emision",
      options: [
        {
          label: "Laura",
          value: "laura",
        },
        {
          label: "Pedro",
          value: "pedro",
        },
      ],
    },
    {
      title: "Marca",
      options: [
        {
          label: "Juan",
          value: "juan",
        },
        {
          label: "juana",
          value: "juana",
        },
      ],
    },
    {
      title: "Transaccion",
      options: [
        {
          label: "Juan",
          value: "juan",
        },
        {
          label: "juana",
          value: "juana",
        },
      ],
    },
    {
      title: "Sucursal",
      options: [
        {
          label: "Juan",
          value: "juan",
        },
        {
          label: "juana",
          value: "juana",
        },
      ],
    },
    {
      title: "Producto",
      options: [
        {
          label: "Tarjeta Grupar",
          value: "Tarjeta Grupar",
        },
        {
          label: "Tarjeta Individual",
          value: "Tarjeta Individual",
        },
      ],
    },
  ];

export {dataNovelty,dataSettings,columnsSettins,columnsNovelty,filtros};