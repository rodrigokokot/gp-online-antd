import { Form , Card, Row,Col, Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react"; 
import { useTranslation } from "react-i18next";
import FloatSelected from "../../../../../components/molecules/FloatSelected";
import Edit from "../../../../../components/organisms/Edit"; 

const CambioDeEstadoTarjeta = () => {
  const { t } = useTranslation();
  function form() {
    return (
      <Card> 
        <Row>
          <Col span={6}>
            <h4 className="grey-text">{t("estado.view.tab4.greytext1")}</h4><h1 className="bold-text">{'Normal'}</h1> 
	        </Col>
          <Col span={6}>  
          <Form.Item
            name="nuevoEstado"
            rules={[
              { required: true, message: (t("estado.view.tab4.tarjeta.error")) },
            ]}
          >
            <FloatSelected
              width={200}
              type="text"
              label={t("estado.view.tab4.tarjeta.label")}
              placeholder={t("estado.view.tab4.tarjeta.label")}
              options={[{value:"normal",title:"normal"},{value:"nuevo",title:"nuevo"}]}
            ></FloatSelected>
          </Form.Item>
             
	        </Col>
          <Col span={6}>
            <Form.Item name="reimprimir">
            <Switch
              checkedChildren={t("estado.view.tab4.switch.enabled")}
              unCheckedChildren={t("estado.view.tab4.switch.disabled")}
              defaultChecked
            />
          </Form.Item>
	        </Col>  
        </Row> 
        
        <Col span={18}> 
            <h4>{t("estado.view.tab4.comentarios")}</h4>
            <Form.Item name="comentario">
              <TextArea
                style={{ width: "50%", borderRadius: 6 }}
                maxLength={2200}
              />
            </Form.Item>
          </Col>
      </Card>
    );
  }
  return ( 
        <Edit 
          component={form}
          textBtnSave={t("estado.view.tab4.edit.save")}
          textModalConfirm={t("estado.view.tab4.edit.confirm")}
          textBtnModalConfirm={t("estado.view.tab4.edit.btnconfirm")} />  
  );
};

export default CambioDeEstadoTarjeta;
