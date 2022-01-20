import React from "react";
import { Card, AutoComplete, Tabs, Button } from "antd";
import Table from "../components/organisms/Table";
import DeploymentConfirmation from "../components/molecules/DeploymentConfirmation";
import { DownOutlined } from "@ant-design/icons";
import DateRangeComponent from "../components/molecules/DateRangePicker";
import DateRangeFilter from "../components/organisms/DateRangeFilter";
import { useState } from "react/cjs/react.development";
import Filter from "../components/organisms/Filter";

function GestionAprobaciones() {
  const columns = [
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

  const data = [
    {
      id: 23,
      title: "Beetlejuice",
      new: "1988",
      date: "23/4/35 23:12",
      user: "Romero, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tareta Grupar",
      product: "Tareta Grupar",
      branch: "Cordoba",
      client: "Candela, Olga miriam del valle",
    },
    {
      id: 24,
      title: "Beetlejuice",
      new: "1988",
      date: "23/4/35 23:12",
      user: "Romero, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tareta Grupar",
      product: "Tareta Grupar",
      branch: "Cordoba",
      client: "Candela, Olga miriam del valle",
    },
    {
      id: 25,
      title: "Beetlejuice",
      new: "1988",
      date: "23/4/35 23:12",
      user: "Romero, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tareta Grupar",
      product: "Tareta Grupar",
      branch: "Cordoba",
      client: "Candela, Olga miriam del valle",
    },
    {
      id: 26,
      title: "Beetlejuice",
      new: "1988",
      date: "23/4/35 23:12",
      user: "Romero, lucia",
      comment: "-",
      acount: "334252",
      brand: "Tareta Grupar",
      product: "Tareta Grupar",
      branch: "Cordoba",
      client: "Candela, Olga miriam del valle",
    },
  ];

  const { Meta } = Card;
  const { TabPane } = Tabs;

  return (
    <>
      <Tabs defaultActiveKey="1" style={{ color: "#C1C5C8" }}>
       
        {/* Pantalla 1 */}
        <TabPane tab="Novedades por confirmar" key="1">
          <Card
            style={{
              width: AutoComplete,
              marginTop: 16,
              borderLeftColor: "#69E2B7",
              borderLeftWidth: 7,
            }}
            bordered={true}
          >
            <Meta
              avatar={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
                    fill="#69E2B7"
                  />
                  <path
                    d="M8.97064 3.87891H7.03125L7.27367 9.21224H8.72822L8.97064 3.87891Z"
                    fill="white"
                  />
                  <path
                    d="M8.00095 10.1819C8.5365 10.1819 8.97064 10.6161 8.97064 11.1516C8.97064 11.6872 8.5365 12.1213 8.00095 12.1213C7.4654 12.1213 7.03125 11.6872 7.03125 11.1516C7.03125 10.6161 7.4654 10.1819 8.00095 10.1819Z"
                    fill="white"
                  />
                </svg>
              }
              title="Tenés 25 pedidos de aprobación"
              description="Desplegá cada fila para poder operar las confirmaciones."
            />
          </Card>
          <Filter></Filter>
          <DateRangeFilter></DateRangeFilter>
          <Table
            component={DeploymentConfirmation}
            columns={columns}
            data={data}
            expandible={true}
            // selectable={true}
          />
        </TabPane>

        {/* Pantalla 2 */}
        <TabPane tab="Ajustes por Confirmar" key="2">
          <h2 style={{ color: "#AB218E" }}>Informacion de la novedad</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              gap: "10% 10%",
              flexDirection: "row",
            }}
          >
            <div>
              <h3>
                ID de la transaccion:<h5>213432</h5>
              </h3>
              <h3>
                Usuario de inicio:<h5>Emilia</h5>
              </h3>
              <h3>
                Usuario de finalizo:<h5>Emilia</h5>
              </h3>
            </div>
            <div>
              <h3>
                Tipo de transaccion:<h5>Actualizacion de la targeta</h5>
              </h3>
              <h3>
                Fecha de inicio:<h5>23/4/19</h5>
              </h3>
              <h3>
                Fecha de finalizacion:<h5>-</h5>
              </h3>
            </div>
            <div>
              <h3>
                Estado de transaccion:<h5>Pendiente</h5>
              </h3>
              <h3>
                Comentario:<h5>-</h5>
              </h3>
            </div>
          </div>
          <DateRangeFilter></DateRangeFilter>
          <Table
            component={DeploymentConfirmation}
            columns={columns}
            data={data}
            // expandible={true}
            selectable={true}
          />
          <Button type="primary">Aplicar Confirmación</Button>
        </TabPane>
      </Tabs>
    </>
  );
}

export default GestionAprobaciones;
