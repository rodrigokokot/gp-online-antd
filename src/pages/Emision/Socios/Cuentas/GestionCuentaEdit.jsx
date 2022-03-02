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
} from "antd";
import FloatInput from "../../../../components/molecules/FloatInput";
import FloatSelect from "../../../../components/molecules/FloatSelected/index";
import Edit from "../../../../components/organisms/Edit";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
const { Title } = Typography;

const GestionCuentaNew = () => {
  const { t} = useTranslation();
  const FormularioCuenta = () => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
      setValue(e.target.value);
    };

    //para calendario
    const [valuedate, setValuedate] = useState((t("gestioncuenta.edit.outline.fnacimiento.label")));
    function onChangedate(date, dateString) {
      setValuedate(dateString);
      console.log("date ", dateString);
    }
    
    //para deshabilitar input
    const [checked,setChecked]=useState(false);
    const onChangeCheck = (e) =>{
        setChecked(e.target.checked)
    }
    //para habilitar form.item
    const [disabled, setDisabled] = useState(false);
    function onChangeActivar() {
      setDisabled(!disabled);
    }//valor del documento a buscar
    const [buscar,setBuscar]=useState(undefined);
    function onChangeDoc(e){
        setBuscar(e.target.value);
    }
    return (
      <>
         <Card>
          <Typography.Title level={3}  style={{ color: '#ab218e' }}> 
          {t("gestioncuenta.edit.title1")}
          </Typography.Title> <br></br>
      
            <Row gutter={48}>
                <Col span={6}>
                    <Form.Item
                    name="sucursal"
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.sucursal.error")) }]}
                    >
                        <FloatSelect outline
                                    label={t("gestioncuenta.edit.outline.sucursal.label")}
                                    placeholder={t("gestioncuenta.edit.outline.sucursal.label")}
                                    options={[
                                    {
                                        title: "Sucursal CABA",
                                        value: "Sucursal CABA",
                                        disabled: false,
                                    },
                                    {
                                        title: "Sucursal Mendoza",
                                        value: "Sucursal Mendoza",
                                        disabled: false,
                                    },
                                    {
                                        title: "Sucursal San Luis",
                                        value: "Sucursal sSan Luis",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                    <Form.Item
                    name="tipoproducto"
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.typeproducto.error")) }]}
                    >
                        <FloatInput outline label={t("gestioncuenta.edit.outline.typeproducto.label")} placeholder={t("gestioncuenta.edit.outline.typeproducto.label")}></FloatInput>
                    </Form.Item>
                    <Form.Item
                        name="posicion"
                        rules={[{ required: true, message:(t("gestioncuenta.edit.outline.posicion.error")) }]}
                    >
                        <FloatSelect outline
                                    label={t("gestioncuenta.edit.outline.posicion.label")}
                                    placeholder={t("gestioncuenta.edit.outline.posicion.label")}
                                    options={[
                                    {
                                        title: "Excento",
                                        value: "Excento",
                                        disabled: false,
                                    },
                                    {
                                        title: "Excento",
                                        value: "Excento",
                                        disabled: false,
                                    },
                                    {
                                        title: "Excento",
                                        value: "Excento",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                    <Form.Item
                        name="entregatarjeta"
                        rules={[{ required: true, message: (t("gestioncuenta.edit.outline.entregat.error")) }]}
                    >
                        <FloatSelect outline
                                        label={t("gestioncuenta.edit.outline.entregat.label")}
                                        placeholder={t("gestioncuenta.edit.outline.entregat.label")}
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
                    <Form.Item name='gpafinidad'>
                    <FloatSelect outline
                                    label={t("gestioncuenta.edit.outline.gafinidad.label")}
                                    placeholder={t("gestioncuenta.edit.outline.gafinidad.label")}
                                    options={[
                                    {
                                        title: "Grupo de afinidad prepaga",
                                        value: "Grupo de afinidad prepaga",
                                        disabled: false,
                                    },
                                    {
                                        title: "Grupo de afinidad prepaga",
                                        value: "Grupo de afinidad prepaga",
                                        disabled: false,
                                    },
                                    {
                                        title: "Grupo de afinidad prepaga",
                                        value: "Grupo de afinidad prepaga",
                                        disabled: false,
                                    },
                                    ]}
                        ></FloatSelect>
                    </Form.Item>
                    <Form.Item
                        name="producto"
                        rules={[{ required: true, message: (t("gestioncuenta.edit.outline.producto.error")) }]}
                        >
                        <FloatInput outline label={t("gestioncuenta.edit.outline.producto.label")} placeholder={t("gestioncuenta.edit.outline.producto.label")}></FloatInput>
                    </Form.Item>
                    <Form.Item  name='cuentaexterna'>
                        <FloatInput outline label={t("gestioncuenta.edit.outline.cuentaext.label")} placeholder={t("gestioncuenta.edit.outline.cuentaext.label")}></FloatInput>
                    </Form.Item> 
                    <Form.Item
                    name="estado"
                    rules={[{ required: true, message:(t("gestioncuenta.edit.outline.estado.error")) }]}
                    >
                    <FloatSelect outline
                                    label={t("gestioncuenta.edit.outline.estado.label")}
                                    placeholder={t("gestioncuenta.edit.outline.estado.label")}
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
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>
          {t("gestioncuenta.edit.title2")}</Typography.Title> 
        
        <Title level={5}>{t("gestioncuenta.edit.typedoc.label")}</Title>
        <Form.Item name="tipodocumento" rules={[{ required: true,message: (t("gestioncuenta.edit.typedoc.error")) }]}>
            <Radio.Group>
=======
import { cuentas } from "../../../../services";
import { useParams } from "react-router-dom";
const { Title } = Typography;

const GestionCuentaEdit = () => {
  const { id } = useParams();
  const [value, setValue] = useState(""); //radioGroud tipo documento
  const [valuedate, setValuedate] = useState("Fecha de Nacimiento*"); //para calendario
  const [disabled, setDisabled] = useState(false); //para habilitar form.item
  const [cuenta, setCuenta] = useState();
  const [sucursales, setSucursales] = useState([]);
  const [gruposAfinidad, setGruposAfinidad] = useState([]);
  const [posicionesImpositivas, setPosicionesImpositivas] = useState([]);
  const [tipoProducto, setTipoProducto] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getDataCuenta();
    getDataSucursales();
    getDataGrupoAfinidad();
    getPosicionesImpositivas();
    getDataTipoProducto();
    getDataProductos();
  }, []);

  const getDataCuenta = async () => {
    const res = await cuentas.getCuentas(`IdCuenta=${id}`);
    // console.log("cuenta:", res[0]);
    setCuenta(res[0]);
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

  const changeValue = (e) => {
    setValue(e.target.event);
  };

  const changeValueDate = (dateString) => {
    setValue(dateString);
  };

  const toogleFormItem = (e) => {
    setDisabled(!disabled);
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
                  // placeholder="Sucursal*"
                  defaultValue={cuenta?.sucursal.descripcion}
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
                  placeholder="Tipo de producto*"
                  options={tipoProducto}
                ></FloatSelect>
              </Form.Item>
              <Form.Item
                name="posicion"
                rules={[{ required: true, message: "Ingrese posición" }]}
              >
                <FloatSelect
                  outline
                  // disabled={posicionesImpositivas.length === 0}
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
                  defaultValue={cuenta?.socio.persona.idDomicilioLegal}
                  options={[
                    {
                      title: "Domicilio legal",
                      value: "Domicilio legal",
                    },
                    {
                      title: "Domicilio",
                      value: "Domicilio",
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
                  disabled={cuenta === []}
                  label="Cuenta externa"
                  defaultValue={cuenta?.idCuentaExterna}
                ></FloatInput>
              </Form.Item>
              <Form.Item
                name="estado"
                rules={[{ required: true, message: "Ingrese estado" }]}
              >
                <FloatSelect
                  outline
                  label="Estado*"
                  value={cuenta?.idEstado}
                  placeholder={cuenta?.idEstado}
                  options={[
                    {
                      title: "Activo",
                      value: "activo",
                    },
                    {
                      title: "Inactivo",
                      value: "inactivo",
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
            <Radio.Group onChange={changeValue} value={value}>
>>>>>>> b78177f7230f1685672da1d658cf1108aea068bd
              <Row justify="space-between">
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestioncuenta.edit.typedoc.value1")}>
                  {t("gestioncuenta.edit.typedoc.value1")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestioncuenta.edit.typedoc.value2")}>
                  {t("gestioncuenta.edit.typedoc.value2")}
                  </Radio>
                </Col>
                <Col span={8}>
                  <Radio style={{ marginTop: 10 }} value={t("gestioncuenta.edit.typedoc.value3")}>
                  {t("gestioncuenta.edit.typedoc.value3")}
                  </Radio>
                  <Radio
                    style={{ marginTop: 10 }}
                    value={t("gestioncuenta.edit.typedoc.value4")}
                  >
                    {t("gestioncuenta.edit.typedoc.value4")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestioncuenta.edit.typedoc.value5")}>
                  {t("gestionusuarios.edit.typedoc.value5")}
                  </Radio>
                  <Radio style={{ marginTop: 10 }} value={t("gestioncuenta.edit.typedoc.value6")}>
                  {t("gestioncuenta.edit.typedoc.value6")}
                  </Radio>
                </Col>
                <Col span={4}>
                  <Radio style={{ marginTop: 10 }} value={t("gestioncuenta.edit.typedoc.value7")}>
                    {t("gestioncuenta.edit.typedoc.value7")}
                  </Radio>
                </Col>
              </Row>
</Radio.Group>
          </Form.Item>
       
        <Row gutter={48}>
          <Col span={6}>                           
              <Form.Item name='documento' 
                  rules={[{ required: true, message: (t("gestioncuenta.edit.outline.documento.error")) }]}
              >
<<<<<<< HEAD
                <FloatInput outline onChange={onChangeDoc} type="number" label={t("gestioncuenta.edit.outline.documento.label")} placeholder={t("gestioncuenta.edit.outline.documento.label")}></FloatInput>
=======
                <FloatInput
                  outline
                  type="number"
                  label="N° de Documento*"
                  defaultValue={cuenta?.socio.persona.numeroDocumento}
                ></FloatInput>
>>>>>>> b78177f7230f1685672da1d658cf1108aea068bd
              </Form.Item>
          </Col>        
        </Row>
        <Row gutter={48}>
            <Col span={6}>
<<<<<<< HEAD
                <Form.Item name='nombre' 
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.nombre.error")) }]}
                >
                    <FloatInput outline label={t("gestioncuenta.edit.outline.nombre.label")} placeholder={t("gestioncuenta.edit.outline.nombre.label")}></FloatInput>
                </Form.Item>
                <Form.Item
                name="sexo"
                >
                        <FloatSelect outline
                                    label={t("gestioncuenta.edit.outline.sexo.label")}
                                    placeholder={t("gestioncuenta.edit.outline.sexo.label")}
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
                                        }
                                    ]}
                ></FloatSelect>
                </Form.Item>
                <Form.Item 
                    name="fechanacimiento"
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.fnacimiento.error")) }]}
                >
                    <DatePicker style={{width: '100%', borderRadius:6}} onChange={onChangedate} placeholder={valuedate} format={'DD/MM/YYYY'} />
                </Form.Item>
                <Form.Item 
                    name="email"
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.email.error")) }]}
                    >
                    <FloatInput outline type="email" label={t("gestioncuenta.edit.outline.email.label")} placeholder={t("gestioncuenta.edit.outline.email.label")}></FloatInput>
                    </Form.Item> 
            </Col>
            <Col span={6}>
                <Form.Item name='apellido' 
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.apellido.error")) }]}
                >
                    <FloatInput outline label={t("gestioncuenta.edit.outline.apellido.label")} placeholder={t("gestioncuenta.edit.outline.apellido.label")}></FloatInput>
                </Form.Item>
                <Form.Item
                name="estadocivil"
                >
                        <FloatSelect outline
                                    label={t("gestioncuenta.edit.outline.estadocivil.label")}
                                    placeholder={t("gestioncuenta.edit.outline.estadocivil.label")}
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
                                        }
                                    ]}
                ></FloatSelect>
                </Form.Item>
                <Form.Item 
                    name="paisnacimiento"
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.pais.error")) }]}
                    >
                    <FloatSelect outline
                                    label={t("gestioncuenta.edit.outline.pais.label")}
                                    placeholder={t("gestioncuenta.edit.outline.pais.label")}
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
                    >   </FloatSelect> 
                </Form.Item>
                <Form.Item 
                    name="codigotribtario"
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.codigotrib.error")) }]}
                >
                    <FloatInput outline type="number" label={t("gestioncuenta.edit.outline.codigotrib.label")} placeholder={t("gestioncuenta.edit.outline.codigotrib.label")}></FloatInput>
                </Form.Item> 
            </Col>
        </Row>    
        <Row gutter={48}>          
        <Col span={12}>
            <Form.Item  name="nombreembozado" 
                rules={[{ required: true, message: (t("gestioncuenta.edit.outline.nombremb.error")) }]}
            >
                <FloatInput outline label={t("gestioncuenta.edit.outline.nombremb.label")} placeholder={t("gestioncuenta.edit.outline.nombremb.label")}></FloatInput>
            </Form.Item>
        </Col> </Row> 
        </Card>   
        <br></br>
        <Card >
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>
          {t("gestioncuenta.edit.title3")}</Typography.Title>  
                            
            <Title level={5}>{t("gestioncuenta.edit.check1.title1")}</Title>
            <Checkbox  onChange={onChangeCheck} checked={checked}> 
            <Title level={5}>{t("gestioncuenta.edit.check1.title2")}</Title></Checkbox>
        { checked && <>
            <Col span={6}>    
                <Form.Item 
                    name="calle" 
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.calle.label")) }]}
                >
                    <FloatInput outline label={t("gestioncuenta.edit.outline.calle.label")} placeholder={t("gestioncuenta.edit.outline.calle.label")}></FloatInput>
                </Form.Item>
            </Col>
            <Row gutter={16}>
                <Col span={3}>
                    <Form.Item name='numero'
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.numero.label")) }]}
                    >
                        <FloatInput outline type='number' label={t("gestioncuenta.edit.outline.numero.label")} placeholder={t("gestioncuenta.edit.outline.numero.label")} ></FloatInput>
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item name='piso'  
                    >
                        <FloatInput outline type='number' label={t("gestioncuenta.new.outline.piso.label")} placeholder={t("gestioncuenta.edit.outline.piso.label")}></FloatInput>
                    </Form.Item> 
                </Col>
                <Col span={3}>
                    <Form.Item name='depto'  
                    >
                        <FloatInput outline label={t("gestioncuenta.edit.outline.dpto.label")} placeholder={t("gestioncuenta.edit.outline.dpto.label")}></FloatInput>
                    </Form.Item> 
                </Col>
                <Col span={3}>
                    <Form.Item name='codpostal'
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.cdpostal.label")) }]}  
                    >
                        <FloatInput outline type='number' label={t("gestioncuenta.edit.outline.cdpostal.label")} placeholder={t("gestioncuenta.edit.outline.cdpostal.label")}></FloatInput>
                    </Form.Item> 
                </Col>
            </Row> 
            <Col span={6}>
                    <Form.Item name='entrecalle'  
                    >
                        <FloatInput outline label={t("gestioncuenta.edit.outline.entrecalles.label")} placeholder={t("gestioncuenta.edit.outline.entrecalles.label")}></FloatInput>
                    </Form.Item> 
                    <Form.Item name='barrio'  
                    >
                        <FloatInput outline label={t("gestioncuenta.edit.outline.barrio.label")} placeholder={t("gestioncuenta.edit.outline.barrio.label")}></FloatInput>
                    </Form.Item> 
                    <Form.Item name='localidad' 
                    rules={[{ required: true, message: (t("gestioncuenta.edit.outline.localidad.label")) }]}   
                    >
                        <FloatInput outline label={t("gestioncuenta.edit.outline.localidad.label")} placeholder={t("gestioncuenta.new.outline.localidad.label")}></FloatInput>
                    </Form.Item> 
                    <Form.Item
                        name="provincia" 
                        rules={[{ required: true, message: (t("gestioncuenta.edit.outline.provincia.label")) }]}
                    >
                        <FloatSelect   outline
                                label={t("gestioncuenta.edit.outline.provincia.label")}
                                placeholder={t("gestioncuenta.edit.outline.provincia.label")}
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
                    <Form.Item name='telefono' 
                    rules={[{ required: true, message:(t("gestioncuenta.edit.outline.telefono.label"))}]}   
                    >
                        <FloatInput outline type='number' label={t("gestioncuenta.edit.outline.telefono.label")} placeholder={t("gestioncuenta.edit.outline.telefono.label")}></FloatInput>
                    </Form.Item>  
                    <Form.Item name='referencia'   
                    >
                        <FloatInput outline label={t("gestioncuenta.edit.outline.referencia.label")} placeholder={t("gestioncuenta.edit.outline.referencia.label")}></FloatInput>
                    </Form.Item>
            </Col> </>}
        </Card>
        <br></br>
        <Card>
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>
          {t("gestioncuenta.edit.title4")}</Typography.Title> 
    
          <Title level={5}>{t("gestioncuenta.edit.check1.title1")}</Title>
            <Checkbox> 
            <Title level={5}>{t("gestioncuenta.edit.check1.title2")}</Title></Checkbox> 
        </Card>   
=======
              <Form.Item
                name="nombre"
                rules={[{ required: true, message: "Ingrese Nombre" }]}
              >
                <FloatInput
                  outline
                  label="Nombre*"
                  defaultValue={cuenta?.socio.persona.nombre}
                ></FloatInput>
              </Form.Item>
              <Form.Item name="sexo">
                <FloatSelect
                  outline
                  label="Sexo"
                  defaultValue={cuenta?.socio.persona.sexo}
                  options={[
                    {
                      title: "Masculino",
                      value: "Masculino",
                    },
                    {
                      title: "Femenino",
                      value: "Femenino",
                    },
                    {
                      title: "Otro",
                      value: "Otro",
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
                  onChange={changeValueDate}
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
                  defaultValue={cuenta?.socio.persona.mail}
                  // placeholder={cuenta.socio.persona.mail}
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
                  defaultValue={cuenta?.socio.persona.apellido}
                ></FloatInput>
              </Form.Item>
              <Form.Item name="estadocivil">
                <FloatSelect
                  outline
                  label="Estado civil"
                  defaultValue={cuenta?.socio.persona.estadoCivil}
                  options={[
                    {
                      title: "Soltero/a",
                      value: 0,
                    },
                    {
                      title: "Casado/a",
                      value: 1,
                    },
                    {
                      title: "Viudo/a",
                      value: 2,
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
                    },
                    {
                      title: "Argentina",
                      value: "Argentina",
                    },
                    {
                      title: "Argentina",
                      value: "Argentina",
                    },
                  ]}
                >
                  {" "}
                </FloatSelect>
              </Form.Item>
              <Form.Item
                name="codigotributario"
                rules={[{ required: true, message: "Ingrese Código" }]}
              >
                <FloatInput
                  outline
                  type="number"
                  label="Código tributario*"
                  defaultValue={cuenta?.socio.persona.codTributario}
                ></FloatInput>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}>
              <Form.Item name="nombreembozado">
                <FloatInput
                  outline
                  label="Nombre embozado"
                  defaultValue={cuenta?.socio.nombreEmbozado}
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
          <Checkbox onChange={toogleFormItem}>
            <Title level={5}>
              Ingresar un domicilio de correspondencia diferente
            </Title>
          </Checkbox>
          {disabled && (
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
                      label="Numero"
                      placeholder="Numero"
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
>>>>>>> b78177f7230f1685672da1d658cf1108aea068bd
        <br></br>
        <Card>
          <Typography.Title level={3}  style={{ color: '#ab218e' }}>
              {t("gestioncuenta.edit.title5")}</Typography.Title> 
              <Title level={5}>{t("gestioncuenta.edit.check1.title1")}</Title>
            <Checkbox> 
            <Title level={5}>{t("gestioncuenta.edit.check1.title2")}</Title></Checkbox>
        </Card>   
        <br></br>
      </>
    );
  };

  return (
<<<<<<< HEAD
    <>
      <Edit
        component={FormularioCuenta}
        textBtnModalConfirm={t("gestioncuenta.edit.edit.btnconfirm")}
        textBtnSave={t("gestioncuenta.edit.edit.save")}
        textModalConfirm={t("gestioncuenta.edit.edit.confirm")}
      />
    </>
=======
    <Edit
      component={FormularioCuenta}
      textBtnModalConfirm="Si, guardar"
      textBtnSave="Guardar Cambios"
      textBtnModalConfirm="¿Realizar cambios en la cuenta?"
      service={cuentas.putCuenta}
    />
>>>>>>> b78177f7230f1685672da1d658cf1108aea068bd
  );
};
export default GestionCuentaEdit;
