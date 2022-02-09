import React from 'react';
import {Card, Row, Col, Space} from 'antd';
import Table from '../../../../components/organisms/Table';
import { columnsConsultaLiquidaciones, ConsultaLiquidacionesSearchArray, dataConsultaLiquidaciones } from './mock';
import SearchForm from '../../../../components/organisms/SearchForm';
import Title from 'antd/lib/typography/Title';

export default function ConsultaLiquidacionesSearch() {
  
    const handleCallback = (values) =>{
        console.log(values);
    }

    const SearchCards = () =>{
        return <>

            <Card>
                <Title level={3}  style={{ color: '#ab218e' }}>Pesos</Title>
                <Row gutter={[36,36]}>
                    <Col span={6}>
                        <b className='grey-text'>Saldo anterior</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Total Débitos</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Total Créditos</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Saldo Actual</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Pago min. Ant.</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Pago Min. Impago</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Pago Min. Actual</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Saldo plan flexible</b>
                        <b className='bold-text'>0.00</b>
                    </Col>
                </Row>
            </Card>

            <Card>
                <Title level={3}  style={{ color: '#ab218e' }}>Dolares</Title>

                <Row gutter={[36,36]}>
                <Col span={6}>
                        <b className='grey-text'>Saldo anterior</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Total Débitos</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Total Créditos</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Saldo Actual</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Pago min. Ant.</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Pago Min. Impago</b>
                        <b className='bold-text'>0.00</b>
                    </Col>

                    <Col span={6}>
                        <b className='grey-text'>Pago Min. Actual</b>
                        <b className='bold-text'>0.00</b>
                    </Col>


                </Row>
            </Card>
            
            <Card style={{marginBottom:"4px"}}>
                <Title level={3}  style={{ color: '#ab218e' }}>Período no liquidado</Title>
                <Col span={8}>
                    <Row gutter={[36,36]}>
                        <Col span={12}>
                            <b className='grey-text'>Fecha de Liquidación</b>
                        </Col>

                        <Col span={12}>
                            <b className='grey-text'>Fecha de Vencimiento</b>
                        </Col>

                        <Col span={12}>
                            <b className='grey-text'>Puntos del periodo</b>
                        </Col>

                        <Col span={12}>
                            <b className='grey-text'>Puntos acumulados</b>
                        </Col>
                    </Row>
                </Col>
            </Card>
        
        </>
    }
  
  
  
  return <div>

      <SearchCards  />

      <SearchForm array={ConsultaLiquidacionesSearchArray} title="Consulta de movimientos historicos" parentCallback={handleCallback} span={6} />
      <Table columns={columnsConsultaLiquidaciones} data={dataConsultaLiquidaciones} expandible={false} editable={false} />

  </div>;
}
