import Table from "../components/organisms/Table/index";
import React from "react";
import { AdvancedSearchForm } from "../components/organisms/AdvancedSearchForm/index";
import { GestionSucursalesSearch } from "../searches/GestionSucursalesSearch";
import { Card } from "antd";

function PageFacu() {
  
  
  const columns = () => {
    const column = [];
    const array = GestionSucursalesSearch();

    array.map((item) => {
      column.push({
        title: item.name,
        dataIndex: item.name,
        key: item.name,
        width: 100,
      });
    });

    return column
  };


  const data = [
    {
      key:1,
      Descripción: 'Tarjetas',
      Código: '666',
      CódigoPostal: '5425',
      Provincia: 'San Juan',
      Estado: 'Suspendido',
    }
  ]

  return (
    <div>
      <Card style={{ marginTop: "15px", marginBottom: "15px" }}>
        <AdvancedSearchForm array={GestionSucursalesSearch()} />
      </Card>

      <Card style={{ marginTop: "50px", marginBottom: "50px" }}>
        {console.log(data)}
        <Table columns={columns()} dataSource={data}  />
      </Card>
    </div>
  );
}

export default PageFacu;
