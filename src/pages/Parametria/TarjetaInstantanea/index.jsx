import React from 'react';
import SearchForm from '../../../components/organisms/SearchForm'
import Table from '../../../components/organisms/Table';
import FloatInput from "../../../components/molecules/FloatInput/index";
import { Link } from 'react-router-dom';
import FloatSelected from '../../../components/molecules/FloatSelected';
import { Col, Button } from 'antd'

const columnsTarjetaInstantanea = [
    {
        name: 'Emisor-Sucursal',
        selector: (row) => row.esucursal,
        sortable: true
    },
    {
        name: 'ID',
        selector: (row) => row.id,
        sortable: true
    },
    {
        name: 'Cliente',
        selector: (row) => row.nombre,
        sortable: true
    },
    {
        name: 'Documento',
        selector: (row) => row.documento,
        sortable: true
    },
    {
        name: 'Marca',
        selector: (row) => row.marca,
        sortable: true
    },
    {
        name: 'Cuenta',
        selector: (row) => row.cuenta,
        sortable: true
    },
    {
        name: 'Producto',
        selector: (row) => row.producto,
        sortable: true
    },
    {
        name: 'Adicional',
        selector: (row) => row.adicional,
        sortable: true
    },
    {
        name: 'Tarjeta',
        selector: (row) => row.tarjeta,
        sortable: true
    },
];

const dataTarjetaInstantanea = [
    {
        esucursal: 'Tarjeta Grupar - Cordoba',
        id: '1617811',
        nombre: "Mari",
        documento: "DNI 24801003",
        marca: "Tarjeta Grupar",
        cuenta: "001471107",
        producto: "Tarjeta Grupar",
        adicional: "1",
        tarjeta: "6063011055857316",
        option: <Link>Editar</Link>
    },
    {
        esucursal: 'Tarjeta Grupar - Cordoba',
        id: '1617811',
        nombre: "Mari",
        documento: "DNI 24801003",
        marca: "Tarjeta Grupar",
        cuenta: "001471108",
        producto: "Tarjeta Grupar",
        adicional: "1",
        tarjeta: "6063011055857316",
        option: <Link>Editar</Link>
    },
];
const TarjetaInstantaneaSearch = [
    {
        index: 'Emisor',
        input: (
            <FloatSelected
                placeholder="Emisor"
                label="Emisor"
                options={[
                    { title: "emisor 1", value: 1, disabled: false, },
                    { title: "emisor 2", value: 2, disabled: false, },
                    { title: "emisor 3", value: 3, disabled: false, },
                ]}
            ></FloatSelected>
        ),
    },
    {
        index: 'Marca',
        input: (
            <FloatSelected
                placeholder="Marca"
                label="Marca"
                options={[
                    { title: "Marca 1", value: 1, disabled: false, },
                    { title: "Marca 2", value: 2, disabled: false, },
                    { title: "Marca 3", value: 3, disabled: false, },
                ]}
            ></FloatSelected>
        ),
    },
    {
        index: 'N° de tajeta',
        name: 'tarjeta',
        input: <FloatInput placeholder="N° de tajeta" label="N° de tajeta" />,
    },
    {
        index: 'N° de cuenta',
        name: 'cuenta',
        input: <FloatInput placeholder="N° de cuenta" label="N° de cuenta" />,
    },
    {
        index: 'N° de cuenta orginal',
        name: 'cuenta',
        input: <FloatInput placeholder="N° de cuenta original" label="N° de cuenta original" />,
    },
    {
        index: 'N° de cuenta relacionada',
        name: 'cuenta',
        input: <FloatInput placeholder="N° de cuenta relacionada" label="N° de cuenta relacionada" />,
    },
    {
        index: 'Apellidos',
        name: 'apellidos',
        input: <FloatInput placeholder="Apellidos" label="Apellido" />,
    },
    {
        index: 'Nombres',
        name: 'nombres',
        input: <FloatInput placeholder="Nombres" label="Nombre" />,
    },
    {
        index: 'Tipo de documento',
        input: (
            <FloatSelected
                placeholder="Tipo de documento"
                label="Tipo de documento"
                options={[
                    { title: "CUIL", value: 7, disabled: false, },
                    { title: "CUIT", value: 8, disabled: false, },
                    { title: "DNI", value: 1, disabled: false, },
                    { title: "Cedula de Identidad", value: 2, disabled: false, },
                    { title: "Libreta Civica", value: 5, disabled: false, },
                    { title: "Libreta de Enrolamiento", value: 3, disabled: false, },
                    { title: "Pasaporte", value: 4, disabled: false, },
                ]}
            ></FloatSelected>
        ),
    },
    {
        index: 'N° de documento',
        input: (
            <FloatSelected
                placeholder="N° de documento"
                label="N° de documento"
                options={[
                    { title: "N° de documento 1", value: 1, disabled: false, },
                    { title: "N° de documento 2", value: 2, disabled: false, },
                    { title: "N° de documento 3", value: 3, disabled: false, },
                ]}
            ></FloatSelected>
        ),
    },
    {
        index: 'Razón social',
        name: 'razonsocial',
        input: <FloatInput placeholder="Razón social" label="Razón social" />,
    },
    {
        index: 'Número de empresa',
        input: (
            <FloatSelected
                placeholder="Número de empresa"
                label="Número de empresa"
                options={[
                    { title: "Número de empresa 1", value: 1, disabled: false, },
                    { title: "Número de empresa 2", value: 2, disabled: false, },
                    { title: "Número de empresa 3", value: 3, disabled: false, },
                ]}
            ></FloatSelected>
        ),
    },
];
function TarjetaInstantanea() {
    return (<>
        <Col style={{ textAlign: "right", marginBottom: "25px" }}>

            <Link to="/parametria/tarjetaInstantanea/nueva">
                <Button type="primary" size="small">
                    Nuevo tarjeta instantanea
                </Button>
            </Link>

            <Link to="/parametria/tarjetaInstantanea/nueva2">
                <Button type="primary" size="small">
                    Nuevo tarjeta instantanea 2
                </Button>
            </Link>

            <Link to="/parametria/tarjetaInstantanea/nueva3">
                <Button type="primary" size="small">
                    Nuevo tarjeta instantanea 3
                </Button>
            </Link>
        </Col>

        <SearchForm title="Búsqueda de cuentas" array={TarjetaInstantaneaSearch} span={5}></SearchForm>
        <br />
        <Table data={dataTarjetaInstantanea} columns={columnsTarjetaInstantanea}></Table>
    </>
    )
}

export default TarjetaInstantanea