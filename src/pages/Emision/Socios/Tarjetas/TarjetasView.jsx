import React from "react";
import { Card, Checkbox, Row, Col, Form} from "antd";
import Edit from "../../../../components/organisms/Edit";
import FloatSelected from "../../../../components/molecules/FloatSelected";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function TarjetasView() {
  const { t} = useTranslation();
  const FormularioEdit = () => {
    const generaReimpresion = (e) => {
      console.log(e.target.value);
    };

    const { id } = useParams();

    return (
      <>
        <Card>
          <Row justify="space-between" style={{ marginBottom: "36px" }}>
            <h1 className="purple-title">{t("tarjeta.view.title")}</h1>
            <Link
              to={`/emision/socios/tarjetas/detalle=${id}/historial`}
              style={{ textDecoration: "underline" }}
              rel="noopener noreferrer"
            >
              {t("tarjeta.view.link")}
            </Link>
          </Row>

          <Row gutter={[48, 48]}>
            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext1")}</h1>
              <h1 className="bold-text">552268XXXXXX0372</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext2")}</h1>
              <h1 className="bold-text">Mauro</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext3")}</h1>
              <h1 className="bold-text">Ramirez</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext4")}</h1>
              <h1 className="bold-text">
                {new Date().toISOString().split("T")[0]}
              </h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext5")}</h1>
              <h1 className="bold-text">
                {new Date().toISOString().split("T")[0]}
              </h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext6")}</h1>
              <h1 className="bold-text">Mauro Ramirez</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext7")}</h1>
              <h1 className="bold-text">14/0</h1>
            </Col>

            <Col span={6}>
              <h1 className="grey-text">{t("tarjeta.view.text.greytext8")}</h1>
              <h1 className="bold-text">Sucursal C.A.B.A</h1>
            </Col>
          </Row>

          <Row style={{ marginTop: 46 }} gutter={48}>
            <Col span={6}>
              <Form.Item
                name="estado"
                rules={[{ required: true, message: (t("tarjeta.view.input.error")) }]}
              >
                <FloatSelected
                  outline
                  label={t("tarjeta.view.input.label")}
                  placeholder={t("tarjeta.view.input.label")}
                  options={[
                    {
                      title: "Habilitada",
                      value: "Habilitada",
                      disabled: false,
                    },
                    {
                      title: "Inhabilitada",
                      value: "Inhabilitada",
                      disabled: false,
                    },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Checkbox onChange={generaReimpresion}>
              {t("tarjeta.view.check")}
              </Checkbox>
            </Col>
          </Row>
        </Card>
      </>
    );
  };

  return (
    <div>
      <Edit
        component={FormularioEdit}
        textBtnSave="Guardar"
        textModalConfirm="¿Realizar cambios en la tarjet?"
        textBtnModalConfirm="Si, guardar"
      />
    </div>
  );
}
