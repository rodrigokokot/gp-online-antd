import React, { useState } from 'react'
import { Card, Button, Row, Col, TimePicker, Radio } from 'antd';
import DateRangeComponent from '../../molecules/DateRangePicker';
import eoLocale from 'date-fns/locale/es'
import {format} from 'date-fns'

function DateRangeFilter() {
    const [startDate, setStartDate] = useState(null)
    const [endtDate, setEndtDate] = useState(null)
    const [searchType, setSearchType] = React.useState(2);
    const dateSelected = (data) => {
        setStartDate(format(new Date(data[0].startDate), "dd 'de' MMMM yyyy", {
            locale: eoLocale
        }))
        setEndtDate(format(new Date(data[0].endDate), "dd 'de' MMMM yyyy", {
            locale: eoLocale
        }))
    }

    const style = { background: '#0092ff', padding: '8px 0' };
    return (
        <div className="site-card-wrapper">
            <Row gutter={14}>
                <Col span={10}>
                    <Card style={{
                        width: '635px',
                        height: '682px',
                        left: '0px',
                        top: '14px',
                        background: '#FFFFFF',
                        border: '1px',
                        borderColor: '#C4C4C4',
                    }}>
                        <p>
                            Buscar por:
                            <Radio.Group style={{marginLeft: '10px'}} onChange={(e) => setSearchType(e.target.value)} value={searchType}>
                                <Radio value={1}>Fecha de presentación</Radio>
                                <Radio value={2}>Fecha de origen</Radio>
                            </Radio.Group>
                        </p>

                        <DateRangeComponent className="width-card" dateSelected={dateSelected}/>

                        <p><b>Desde:</b> {startDate}</p>
                        <p><b>Hasta:</b> {endtDate}</p>

                        <Button type="primary">Aplicar</Button>
                        <Button type="text" style={{ marginLeft: '20px' }}>Limpiar filtros</Button>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{
                        width: '260px',
                        height: '682px',
                        top: '14px',
                    }}>
                        <div  style={{marginTop: '95px', left: '12px'}}>
                            <p><b>Desde:</b> <TimePicker style={{borderRadius: '8px', height: '45px'}} type="time" onChange={value => console.log(value)} placeholder='00:00:00' /></p>
                            <p><b>Hasta:</b> <TimePicker style={{borderRadius: '8px', height: '45px'}} type="time" onChange={value => console.log(value)} placeholder='00:00:00' /></p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

export default DateRangeFilter
