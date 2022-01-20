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
         name: item.name,
         selector: (item) => item.index,
         sortable:true,
       });
     });

     return column
   };

  // const column = [
  //   {
  //     name: "Descripcion",
  //     selector: (item) => item.descripcion,
  //     sortable: true,
  //   },
  //   {
  //     name: "Codigo",
  //     selector: (item) => item.codigo,
  //     sortable: true,
  //   },
  // ];


  const data = [
    {
      id: 1,
      descripcion: 'Tarjetas',
      codigo: '666',
      cp: '5425',
      provincia: 'San Juan',
      estado: 'Suspendido',
    },
  ]

  return (
    <div>
      <Card style={{ marginTop: "15px", marginBottom: "15px" }}>
        <AdvancedSearchForm array={GestionSucursalesSearch()} />
      </Card>

      <Card style={{ marginTop: "50px", marginBottom: "50px" }}>
        {/* {console.log(data)}
        {console.log(column)} */}
        <Table columns={columns()} data={data} expandible={false}  />
      </Card>
    </div>
  );
}

export default PageFacu;
