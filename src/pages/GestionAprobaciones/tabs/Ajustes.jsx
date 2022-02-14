import React, { useState } from "react";
import Table from "../../../components/organisms/Table";
import { Button, Card,Col,Row } from "antd";
import SearchForm from "../../../components/organisms/SearchForm";
import { ajustesSearch, columnsAjustes, dataAjustes, } from "../mock";

const Ajustes = () => {
  let childResponse = null;
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataAjustes);
  }

  function selectedRows(value) {
    childResponse = value.selectedRows;
  }

  function showValues() {
    console.log("request:", childResponse);
  }

  return (
    <>
      <Card style={{ marginBottom: "6px", borderRadius: "0.5em" }}>
        <h2 style={{ color: "#AB218E" }}>Informacion de la cuenta</h2>  
        <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">N° de cuenta</h1><h1 className="bold-text">{'213432'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">Nº de CTA. Original</h1><h1 className="bold-text">{'Emilia'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">Fecha de alta</h1><h1 className="bold-text">{'18/05/2021'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">Marca</h1><h1 className="bold-text">{'MasterCard'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">Emisor</h1><h1 className="bold-text">{'Banco de Córdoba'}</h1>
        </Col>
        <Col span={5}> 
            <h1 className="grey-text">Sucursal</h1><h1 className="bold-text">{'Córdoba'}</h1>
        </Col> 
      </Row> <br></br>  
      <h2 style={{ color: "#AB218E" }}>Informacion del Titular</h2>  
      <Row gutter={[6, 24]}>
        <Col span={5}>
            <h1 className="grey-text">Documento</h1><h1 className="bold-text">{'DNI-35404040'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">Apellidos</h1><h1 className="bold-text">{'Gonzalez'}</h1> 
        </Col>
        <Col span={5}>
            <h1 className="grey-text">Nombres</h1><h1 className="bold-text">{'Ruben Dario'}</h1>
        </Col>
      </Row>   
      </Card>
      <SearchForm
        title="Busqueda de ajustes"
        array={ajustesSearch}
        span={6}
        parentCallback={handleCallback}
      />
      <br />
      <Table
        data={data}
        columns={columnsAjustes}
        expandible={false}
        selectable={true}
        parentCallback={selectedRows}
      />
      <br />
      <Button type="primary" onClick={showValues}>
        Aplicar Confirmación
      </Button>
    </>
  );
};

export default Ajustes;
