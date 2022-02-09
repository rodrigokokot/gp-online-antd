import React from "react";
import { Card, Form, Radio, Row, Col, Checkbox, Button } from "antd";
import Edit from "../../../components/organisms/Edit/index";
import FloatInput from '../../../components/molecules/FloatInput';
import FloatSelected from "../../../components/molecules/FloatSelected";

export default function TarjetaInstantaneaNew() {
    const FormularioTarjetaInstantaneaNueva = () => {


        return (
            <>
                <Card style={{ borderRadius: '16px', marginBottom: '12px' }}>
                    <h1 className="purple-title">Información del titular</h1>
                    <Row>
                        <Col span={8}>
                            <text>N° de Cuenta</text>
                        </Col>
                        <Col span={8}>
                            <text>N° de Cuenta Original</text>
                        </Col>
                        <Col span={8}>
                            <text>Fecha Alta</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <text><b>N/D</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b> N/D</b></text>
                        </Col>
                        <Col span={8}>
                            <text><b> N/D</b></text>
                        </Col>
                    </Row>
                </Card>

            </>
        );
    };

    return (
        <div>
            {" "}

            <Edit component={FormularioTarjetaInstantaneaNueva} textModalConfirm="¿Desea confirmar el alta de cuenta?" textBtnModalConfirm="Aplicar confirmación" />
        </div>
    );
}