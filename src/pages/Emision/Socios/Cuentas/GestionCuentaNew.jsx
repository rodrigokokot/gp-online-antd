import React, { useEffect, useState } from "react";
import {
  Radio,
  Form,
  Typography,
  Card,
  Row,
  Col,
  DatePicker,
  Checkbox,
  Button,
} from "antd";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelect from "../../../../components/molecules/FloatSelected/index";
import Edit from "../../../../components/organisms/Edit";
import cuentas from "../../../../services/cuentas";
const { Title } = Typography;

const GestionCuentaNew = () => {
  const [value, setValue] = useState("");
  const [valuedate, setValuedate] = useState("Fecha de Nacimiento*");
  const [checked, setChecked] = useState(false);
  const [buscar, setBuscar] = useState(undefined);
  const [sucursales, setSucursales] = useState([]);
  const [gruposAfinidad, setGruposAfinidad] = useState([]);
  const [posicionesImpositivas, setPosicionesImpositivas] = useState([]);
  const [tipoProducto, setTipoProducto] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getDataSucursales();
    getDataGrupoAfinidad();
    getPosicionesImpositivas();
    getDataTipoProducto();
    getDataProductos();
  }, []);

  const onChange = (e) => {
    setValue(e.target.value); //para Radio
  };

  function onChangedate(date, dateString) {
    setValuedate(dateString); //para calendario
  }

  const onChangeCheck = (e) => {
    setChecked(e.target.checked); //para deshabilitar input
  };

  function handleOk(e) {
    console.log("buscar press", buscar); //Button buscar documento
  }

  function onChangeDoc(e) {
    setBuscar(e.target.value); //valor del documento a buscar
  }

  const getDataGrupoAfinidad = async () => {
    let arr = [];
    const res = await cuentas.getGruposAfinidad();
    res.map((item) => {
      arr.push({
        value: item.idGrupoAfinidad,
        title: item.descripcion,
      });
    });
    setGruposAfinidad(arr);
  };

  const getPosicionesImpositivas = async () => {
    let arr = [{ value: 2, title: "option 1" }];
    const res = await cuentas.getPosicionesImpositivas();
    // res.map((item) => {
    //   arr.push({
    //     value: item.asd,
    //     title: item.descripcion,
    //   });
    // });
    setPosicionesImpositivas(arr);
  };

  const getDataSucursales = async () => {
    let arr = [];
    const res = await cuentas.getSucursales();
    res.map((item) => {
      arr.push({
        value: item.idSucursal,
        title: item.descripcion,
      });
    });
    setSucursales(arr);
  };

  const getDataTipoProducto = async () => {
    let arr = [];
    const res = await cuentas.getTipoProducto();
    res.map((item) => {
      arr.push({
        value: item.idTipoProducto,
        title: item.descripcion,
      });
    });
    setTipoProducto(arr);
  };

  const getDataProductos = async () => {
    let arr = [];
    const response = await cuentas.getProductos();
    response.map((producto) => {
      arr.push({
        value: producto.idProducto,
        title: producto.descripcion,
      });
    });
    setProductos(arr);
  };

  const FormularioCuenta = () => {
    return (
      <>
        <Card>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            {" "}
            Datos Principales
          </Typography.Title>{" "}
          <br></br>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="sucursal"
                rules={[{ required: true, message: "Ingrese sucursal" }]}
              >
                <FloatSelect
                  outline
                  disabled={sucursales.length === 0}
                  label="Sucursal*"
                  placeholder="Sucursal*"
                  options={sucursales}
                ></FloatSelect>
              </Form.Item>
              <Form.Item
                name="tipoproducto"
                rules={[
                  { required: true, message: "Ingrese Tipo de Producto" },
                ]}
              >
                <FloatSelect
                  outline
                  disabled={tipoProducto.length === 0}
                  label="Tipo de Producto*"
                  placeholder="Tipo de Producto*"
                  options={tipoProducto}
                ></FloatSelect>
              </Form.Item>
              <Form.Item
                name="posicion"
                rules={[{ required: true, message: "Ingrese posición" }]}
              >
                <FloatSelect
                  outline
                  label="Posición impositiva*"
                  placeholder="Posición impositiva*"
                  options={posicionesImpositivas}
                ></FloatSelect>
              </Form.Item>
              <Form.Item
                name="entregatarjeta"
                rules={[{ required: true, message: "Ingrese Entrega" }]}
              >
                <FloatSelect
                  outline
                  label="Entrega de tarjeta*"
                  placeholder="Entrega de tarjeta*"
                  options={[
                    {
                      title: "Domicilio legal",
                      value: "Domicilio legal",
                      disabled: false,
                    },
                    {
                      title: "Domicilio legal",
                      value: "Domicilio legal",
                      disabled: false,
                    },
                    {
                      title: "Domicilio legal",
                      value: "Domicilio legal",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="gpafinidad">
                <FloatSelect
                  outline
                  disabled={gruposAfinidad.length === 0}
                  label="Grupo de afinidad"
                  placeholder="Grupo de afinidad"
                  options={gruposAfinidad}
                ></FloatSelect>
              </Form.Item>
              <Form.Item
                name="producto"
                rules={[{ required: true, message: "Ingrese Producto" }]}
              >
                <FloatSelect
                  outline
                  disabled={productos.length === 0}
                  label="Producto*"
                  placeholder="Producto*"
                  options={productos}
                ></FloatSelect>
              </Form.Item>
              <Form.Item name="cuentaexterna">
                <FloatInput
                  outline
                  label="Cuenta externa"
                  placeholder="Cuenta externa"
                ></FloatInput>
              </Form.Item>
              <Form.Item
                name="estado"
                rules={[{ required: true, message: "Ingrese estado" }]}
              >
                <FloatSelect
                  outline
                  label="Estado*"
                  placeholder="Estado*"
                  options={[
                    {
                      title: "Activa",
                      value: "Activa",
                      disabled: false,
                    },
                    {
                      title: "Activa",
                      value: "Activa",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <br></br>
        <Card>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            Titular{" "}
          </Typography.Title>

          <Title level={5}>Tipo de documento</Title>
          <Form.Item name="tipodocumento">
            <Radio.Group onChange={onChange} value={value}>
              <Row justify="space-between">
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={"DNI"}>
                    DNI
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={"CUIT"}>
                    CUIT
                  </Radio>
                </Col>
                <Col span={8}>
                  <Radio style={{ marginTop: 10 }} value={"LIBRETA CIVICA"}>
                    LIBRETA CIVICA
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={"LIBRETA DE ENROLAMIENTO"}
                  >
                    LIBRETA DE ENROLAMIENTO
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={"CUIL"}>
                    CUIL
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={"PASAPORTE"}>
                    PASAPORTE
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={"CI"}>
                    CI
                  </Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>

          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="documento"
                rules={[{ required: true, message: "Ingrese Documento" }]}
              >
                <FloatInput
                  outline
                  onChange={onChangeDoc}
                  type="number"
                  label="N° de Documento*"
                  placeholder="N° de Documento*"
                ></FloatInput>
              </Form.Item>
            </Col>
            <Button type="primary" onClick={handleOk}>
              Buscar
            </Button>
          </Row>
          <Row gutter={48}>
            <Col span={6}>
              <Form.Item
                name="nombre"
                rules={[{ required: true, message: "Ingrese Nombre" }]}
              >
                <FloatInput
                  outline
                  label="Nombre*"
                  placeholder="Nombre*"
                ></FloatInput>
              </Form.Item>
              <Form.Item name="sexo">
                <FloatSelect
                  outline
                  label="Sexo"
                  placeholder="Sexo"
                  options={[
                    {
                      title: "Masculino",
                      value: "Masculino",
                      disabled: false,
                    },
                    {
                      title: "Femenino",
                      value: "Femenino",
                      disabled: false,
                    },
                    {
                      title: "Otro",
                      value: "Otro",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
              <Form.Item
                name="fechanacimiento"
                rules={[
                  { required: true, message: "Ingrese Fecha de Nacimiento" },
                ]}
              >
                <DatePicker
                  style={{ width: "100%", borderRadius: 6 }}
                  onChange={onChangedate}
                  placeholder={valuedate}
                  format={"DD/MM/YYYY"}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Ingrese E-Mail" }]}
              >
                <FloatInput
                  outline
                  type="email"
                  label="E-mail*"
                  placeholder="E-mail*"
                ></FloatInput>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="apellido"
                rules={[{ required: true, message: "Ingrese Apellido" }]}
              >
                <FloatInput
                  outline
                  label="Apellido*"
                  placeholder="Apellido*"
                ></FloatInput>
              </Form.Item>
              <Form.Item name="estadocivil">
                <FloatSelect
                  outline
                  label="Estado civil"
                  placeholder="Estado civil"
                  options={[
                    {
                      title: "Soltero/a",
                      value: "Soltero/a",
                      disabled: false,
                    },
                    {
                      title: "Casado/a",
                      value: "Casado/a",
                      disabled: false,
                    },
                    {
                      title: "Separado/a",
                      value: "Separado/a",
                      disabled: false,
                    },
                  ]}
                ></FloatSelect>
              </Form.Item>
              <Form.Item
                name="paisnacimiento"
                rules={[{ required: true, message: "Ingrese País" }]}
              >
                <FloatSelect
                  outline
                  label="País de Nacimiento*"
                  placeholder="País de Nacimiento*"
                  options={[
                    {
                      title: "Argentina",
                      value: "Argentina",
                      disabled: false,
                    },
                    {
                      title: "Argentina",
                      value: "Argentina",
                      disabled: false,
                    },
                    {
                      title: "Argentina",
                      value: "Argentina",
                      disabled: false,
                    },
                  ]}
                >
                  {" "}
                </FloatSelect>
              </Form.Item>
              <Form.Item
                name="codigotribtario"
                rules={[{ required: true, message: "Ingrese Código" }]}
              >
                <FloatInput
                  outline
                  type="number"
                  label="Código tribtario*"
                  placeholder="Código tribtario*"
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}>
              <Form.Item
                name="nombreembozado"
                rules={[{ required: true, message: "Ingrese nombre embozado" }]}
              >
                <FloatInput
                  outline
                  label="Nombre embozado*"
                  placeholder="Nombre embozado*"
                ></FloatInput>
              </Form.Item>
            </Col>{" "}
          </Row>
        </Card>
        <br></br>
        <Card>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            Domicilio Legal{" "}
          </Typography.Title>

          <Title level={5}>
            Por defecto, el domicilio de correspondencia es el mismo que el
            domicilio legal
          </Title>
          <Checkbox onChange={onChangeCheck} checked={checked}>
            <Title level={5}>
              Ingresar un domicilio de correspondencia diferente
            </Title>
          </Checkbox>
          {checked && (
            <>
              <Col span={6}>
                <Form.Item
                  name="calle"
                  rules={[{ required: true, message: "Ingrese Calle" }]}
                >
                  <FloatInput
                    outline
                    label="Calle*"
                    placeholder="Calle*"
                  ></FloatInput>
                </Form.Item>
              </Col>
              <Row gutter={16}>
                <Col span={3}>
                  <Form.Item
                    name="numero"
                    rules={[{ required: true, message: "Ingrese número" }]}
                  >
                    <FloatInput
                      outline
                      type="number"
                      label="Numero*"
                      placeholder="Numero*"
                    ></FloatInput>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item name="piso">
                    <FloatInput
                      outline
                      type="number"
                      label="Piso"
                      placeholder="Piso"
                    ></FloatInput>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item name="depto">
                    <FloatInput
                      outline
                      label="Depto"
                      placeholder="Depto"
                    ></FloatInput>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item
                    name="codpostal"
                    rules={[
                      { required: true, message: "Ingrese Codigo postal" },
                    ]}
                  >
                    <FloatInput
                      outline
                      type="number"
                      label="Codigo postal*"
                      placeholder="Codigo postal*"
                    ></FloatInput>
                  </Form.Item>
                </Col>
              </Row>
              <Col span={6}>
                <Form.Item name="entrecalle">
                  <FloatInput
                    outline
                    label="Entre Calles"
                    placeholder="Entre Calles"
                  ></FloatInput>
                </Form.Item>
                <Form.Item name="barrio">
                  <FloatInput
                    outline
                    label="Barrio"
                    placeholder="Barrio"
                  ></FloatInput>
                </Form.Item>
                <Form.Item
                  name="localidad"
                  rules={[{ required: true, message: "Ingrese Localidad" }]}
                >
                  <FloatInput
                    outline
                    label="Localidad*"
                    placeholder="Localidad*"
                  ></FloatInput>
                </Form.Item>
                <Form.Item
                  name="provincia"
                  rules={[{ required: true, message: "Ingrese provincia" }]}
                >
                  <FloatSelect
                    outline
                    label="Provincia*"
                    placeholder="Provincia*"
                    options={[
                      {
                        title: "San Juan",
                        value: "San Juan",
                        disabled: false,
                      },
                      {
                        title: "Mendoza",
                        value: "Mendoza",
                        disabled: false,
                      },
                      {
                        title: "San Luis",
                        value: "San Luis",
                        disabled: false,
                      },
                    ]}
                  ></FloatSelect>
                </Form.Item>
                <Form.Item
                  name="telefono"
                  rules={[{ required: true, message: "Ingrese Télefono" }]}
                >
                  <FloatInput
                    outline
                    type="number"
                    label="Télefono*"
                    placeholder="Télefono*"
                  ></FloatInput>
                </Form.Item>
                <Form.Item name="referencia">
                  <FloatInput
                    outline
                    label="Referencia"
                    placeholder="Referencia"
                  ></FloatInput>
                </Form.Item>
              </Col>{" "}
            </>
          )}
        </Card>
        <br></br>
        <Card>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            Domicilio Correspondencia{" "}
          </Typography.Title>

          <Title level={5}>
            Por defecto, el domicilio de correspondencia es el mismo que el
            domicilio legal
          </Title>
          <Checkbox>
            <Title level={5}>
              Ingresar un domicilio de correspondencia diferente
            </Title>
          </Checkbox>
        </Card>
        <br></br>
        <Card>
          <Typography.Title level={3} style={{ color: "#ab218e" }}>
            Domicilio Laboral{" "}
          </Typography.Title>

          <Title level={5}>
            Por defecto, el domicilio de correspondencia es el mismo que el
            domicilio legal
          </Title>
          <Checkbox>
            <Title level={5}>
              Ingresar un domicilio de correspondencia diferente
            </Title>
          </Checkbox>
        </Card>
        <br></br>
      </>
    );
  };

  return (
    <>
      <Edit
        component={FormularioCuenta}
        textBtnModalConfirm="Si, crear"
        textBtnSave="Crear cuenta"
        textModalConfirm="¿Confirma creación de cuenta?"
        service={cuentas.postCuenta}
      />
    </>
  );
};
export default GestionCuentaNew;
