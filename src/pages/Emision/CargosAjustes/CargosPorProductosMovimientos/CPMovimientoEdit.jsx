import React, { useState } from "react";
import {
  Radio,
  Form,
  Typography,
  Card,
  Row,
  Col,
  DatePicker,
  Checkbox,
} from "antd";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelect from "../../../../components/molecules/FloatSelected/index";
import Edit from "../../../../components/organisms/Edit";
import { SearchOutlined } from "@ant-design/icons";
import SelectImg from "../../../../components/organisms/SelectImg.jsx";
import { useTranslation } from "react-i18next";
const { Title } = Typography;

function CPMovimientoEdit() {
  const { t} = useTranslation();
  const FormularioCuenta = () => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
      setValue(e.target.value);
    };

    //para calendario
    const [valuedate, setValuedate] = useState((t("movimiento.edit.outline.fecha.label")));
    function onChangedate(date, dateString) {
      setValuedate(dateString);
      console.log("date ", dateString);
    }
    // check 1
    const [checkedList1, setCheckedList1] = useState("");
    function onChangeCheck(list) {
      setCheckedList1(list);
    }
    return (
      <>
        <Card>
          <Title level={3} style={{ color: "#ab218e" }}>
          {t("movimiento.edit.title")}
          </Title>
          <br></br>
          <Col span={8}>
            <Form.Item
              name="producto"
              rules={[{ required: true, message: (t("movimiento.edit.outline.producto.error")) }]}
            >
              <FloatSelect
                outline
                showSearch={true}
                suffix={<SearchOutlined />}
                label={t("movimiento.edit.outline.producto.label")}
                placeholder={t("movimiento.edit.outline.producto.placeh")}
                options={[
                  {
                    title: "P 1",
                    value: "P 1",
                    disabled: false,
                  },
                  {
                    title: "P 2",
                    value: "P 2",
                    disabled: false,
                  },
                  {
                    title: "P 3",
                    value: "P 3",
                    disabled: false,
                  },
                ]}
              ></FloatSelect>
            </Form.Item>
            <Form.Item
              name="codigomov"
              rules={[{ required: true, message:(t("movimiento.edit.outline.codigomov.error")) }]}
            >
              <FloatSelect
                outline
                showSearch={true}
                suffix={<SearchOutlined />}
                label={t("movimiento.edit.outline.codigomov.label")}
                placeholder={t("movimiento.edit.outline.codigomov.placeh")}
                options={[
                  {
                    title: "CM 1",
                    value: "CM 1",
                    disabled: false,
                  },
                  {
                    title: "CM 2",
                    value: "CM 2",
                    disabled: false,
                  },
                  {
                    title: "CM 3",
                    value: "CM 3",
                    disabled: false,
                  },
                ]}
              ></FloatSelect>
            </Form.Item>
            <Form.Item
              name="tipored"
              rules={[{ required: true, message:(t("movimiento.edit.outline.typered.error")) }]}
            >
              <FloatSelect
                outline
                showSearch={true}
                suffix={<SearchOutlined />}
                label={t("movimiento.edit.outline.typered.label")}
                placeholder={t("movimiento.edit.outline.typered.placeh")}
                options={[
                  {
                    title: "Red 1",
                    value: "Red 1",
                    disabled: false,
                  },
                  {
                    title: "R 2",
                    value: "R 2",
                    disabled: false,
                  },
                  {
                    title: "R 3",
                    value: "R 3",
                    disabled: false,
                  },
                ]}
              ></FloatSelect>
            </Form.Item>
            <Title level={5}>{t("movimiento.edit.locacion.label")}</Title>
            <Form.Item
              name="locacion"
              rules={[{ required: true, message: (t("movimiento.edit.locacion.error")) }]}
            >
              <Checkbox.Group onChange={onChangeCheck}>
                <Checkbox value={t("movimiento.edit.locacion.value1")}>{t("movimiento.edit.locacion.value1")}</Checkbox>
                <Checkbox value={t("movimiento.edit.locacion.value2")}>{t("movimiento.edit.locacion.value2")}</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Title level={5}>{t("movimiento.edit.evento.label")}</Title>
            <Form.Item name="evento" rules={[{ required: true }]}>
              <Radio.Group onChange={onChange} value={value}>
                <Row gutter={55}>
                  <Col span={7}>
                    <Radio value={t("movimiento.edit.evento.value1")}>{t("movimiento.edit.evento.value1")}</Radio>
                  </Col>
                  <Col span={7}>
                    <Radio value={t("movimiento.edit.evento.value2")}>{t("movimiento.edit.evento.value2")}</Radio>
                  </Col>
                  <Col span={10}>
                    <Radio value={t("movimiento.edit.evento.value3")}>{t("movimiento.edit.evento.value3")}</Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="fechadesde"
              rules={[{ required: true, message: (t("movimiento.edit.outline.fecha.error")) }]}
            >
              <DatePicker
                style={{ width: "50%", borderRadius: 6 }}
                onChange={onChangedate}
                placeholder={valuedate}
                format={"DD/MM/YYYY"}
              />
            </Form.Item>
          </Col>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item name="porcentajecargo"
                rules={[{ required: true, message: (t("movimiento.edit.outline.porcentaje.error")) }]}
             >
                <FloatInput
                  outline
                  type="number"
                  label={t("movimiento.edit.outline.porcentaje.label")}
                  placeholder={t("movimiento.edit.outline.porcentaje.placeh")}
                ></FloatInput>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name="precio"
                rules={[{ required: true, message: (t("movimiento.edit.outline.precio.error")) }]}
              >
                <FloatInput
                  outline
                  type="number"
                  label={t("movimiento.edit.outline.precio.label")}
                  placeholder={t("movimiento.edit.outline.precio.placeh")}
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
            <Title level={5}>{t("movimiento.edit.moneda.label")}</Title>
          <Form.Item name="moneda">
            <Checkbox.Group onChange={onChangeCheck}>
              <Checkbox value={t("movimiento.edit.moneda.value1")}>{t("movimiento.edit.moneda.value1")}</Checkbox>
              <Checkbox value={t("movimiento.edit.moneda.value2")}>{t("movimiento.edit.moneda.value2")}</Checkbox>
              <Checkbox value={t("movimiento.edit.moneda.value3")}>{t("movimiento.edit.moneda.value3")}</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Col span={8}>
            <Form.Item name="tipomoneda">
              <SelectImg
                suffix={<SearchOutlined />}
                bordered
                showSearch={true}
                placeholder={t("movimiento.edit.outline.moneda.placeh")}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Row gutter={48}>
              <Col span={12}>
                <Form.Item name="minimo">
                  <FloatInput
                    outline
                    type="number"
                    label={t("movimiento.edit.outline.minimo.label")}
                    placeholder={t("movimiento.edit.outline.minimo.placeh")}
                  ></FloatInput>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="maximo">
                  <FloatInput
                    outline
                    type="number"
                    label={t("movimiento.edit.outline.maximo.label")}
                    placeholder={t("movimiento.edit.outline.maximo.placeh")}
                  ></FloatInput>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="conceptocargo">
              <FloatSelect
                outline
                showSearch={true}
                suffix={<SearchOutlined />}
                placeholder={t("movimiento.edit.outline.cargo.placeh")}
                label={t("movimiento.edit.outline.cargo.label")}
                options={[
                  { title: "C 1", value: "C 1", disabled: false },
                  { title: "C 2", value: "C 2", disabled: false },
                  { title: "C 3", value: "C 3", disabled: false },
                ]}
              ></FloatSelect>
            </Form.Item>
          </Col>
        </Card>
        <br></br>
      </>
    );
  };

  return (
    <>
      <Edit
        component={FormularioCuenta}
        textBtnSave={t("movimiento.edit.edit.save")}
        textModalConfirm={t("movimiento.edit.edit.confirm")}
        textBtnModalConfirm={t("movimiento.edit.edit.btnconfirm")}
      />
    </>
  );
}

export default CPMovimientoEdit;
