import React, { createElement } from "react";
import PruebaComponent from "../components/PruebaComponent";
import { DownOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import { AutoComplete, Button, Table } from "antd";

function GestionAprobaciones() {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id",width:100 },
    { title: "Tipo Novedad", dataIndex: "tipoNovedad", key: "tipoNovedad" },
    { title: "Fecha", dataIndex: "fecha", key: "fecha" },
    { title: "Usuario", dataIndex: "Usuario", key: "Usuario" },
    {
      title: "Comentario",
      dataIndex: "Comentario",
      key: "Comentario",
      ellipsis: true,
    },
    { title: "Cuenta", dataIndex: "Cuenta", key: "Cuenta" },
    { title: "Marca", dataIndex: "Marca", key: "Marca", ellipsis: true },
    {
      title: "Producto",
      dataIndex: "Producto",
      key: "Producto",
      ellipsis: true,
    },
    {
      title: "Sucursal",
      dataIndex: "Sucursal",
      key: "Sucursal",
      ellipsis: true,
    },
    { title: "Cliente", dataIndex: "Cliente", key: "Cliente", ellipsis: true },
    // {
    //   title: "Action",
    //   dataIndex: "",
    //   key: "x",
    //   render: () => <a>Delete</a>,
    // },
  ];

  const data = [
    {
      key: 1,
      id: 24123,
      tipoNovedad: "Cambio de estado de targeta",
      fecha: '32/3/18 23:34',
      Usuario: "Maria Laura",
      Comentario:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
      Cuenta: "23521",
      Marca: "mastercard",
      Producto:'Targeta Grupar',
      Sucursal:'Cordoba',
      Cliente:'Candela',
    },
    {
      key: 2,
      id: 24143,
      tipoNovedad: "John Brown",
      fecha: 32,
      Usuario: "New York No. 1 Lake Park",
      Comentario:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
      Cuenta: "aaasdasdasd",
      Marca: "mastercard",
    },
    
  ];
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <label >
            <h2>Informacion de la novedad</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              <div style={{marginLeft:'-25%'}}>
                <p>
                  ID de la transaccion:<h5>{record.key}</h5>
                </p>
                <p>
                  Usuario de inicio:<h5>Emilia</h5>
                </p>
                <p>
                  Usuario de finalizo:<h5>Emilia</h5>
                </p>
              </div>
              <div>
                <p>
                  Tipo de transaccion:<h5>Actualizacion de la targeta</h5>
                </p>
                <p>
                  Fecha de inicio:<h5>23/4/19</h5>
                </p>
                <p>
                  Fecha de finalizacion:<h5>-</h5>
                </p>
              </div>
              <div>
                <p>
                  Estado de transaccion:<h5>Pendiente</h5>
                </p>
                <p>
                  Comentario:<h5>-</h5>
                </p>
              </div>
            </div>

            <h2>Datos de la operacion</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              <div style={{marginLeft:'-42%'}}>
                <p>
                  Emisor:<h5>{record.key}</h5>
                </p>
                <p>
                  Documento:<h5>Pendiente</h5>
                </p>
                <p>
                  Marca:<h5>23/4/19</h5>
                </p>
                <p>
                  Datos de transaccion:<h5>Emilia</h5>
                </p>
              </div>
              <div>
                <p>
                  Sucursal:<h5>Actualizacion de la targeta</h5>
                </p>

                <p>
                  Cliente:<h5>Emilia</h5>
                </p>

                <p>
                  Cuenta:<h5>-</h5>
                </p>

                <p>
                  Producto:<h5>-</h5>
                </p>
              </div>
            </div>
            <div>
              <Button type="primary" color="#69E2B7">
                Aplicar confirmacion
              </Button>
              <Button>Cancelar confirmacion</Button>
            </div>
          </label>
        ),
      }}
      dataSource={data}
    />
  );
}

export default GestionAprobaciones;
