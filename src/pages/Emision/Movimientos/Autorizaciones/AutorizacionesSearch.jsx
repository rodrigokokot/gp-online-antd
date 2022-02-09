import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Button} from 'antd';
import SearchForm from '../../../../components/organisms/SearchForm/index'
import Table from '../../../../components/organisms/Table/index'
import { AutorizacionesSearchArray, columnsAutorizaciones, dataAutorizaciones } from './mock';


export default function AutorizacionesSearch() {
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/movimientos/autorizaciones/nuevo">
          <Button type="primary" size="small">
            Nueva Autorización
          </Button>
        </Link>
      </Col>

        <SearchForm array={AutorizacionesSearchArray} title="Busqueda de autorizaciones" span={6} />
        <Table data={dataAutorizaciones} columns={columnsAutorizaciones} expandible={false} editable={true} />
      
    </>
  );
}
