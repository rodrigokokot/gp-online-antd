import { Card, Divider, Row,Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const DatosConsumo = () => {
    const { t} = useTranslation();
  return (
    <Card>  
    <Row gutter={[24, 24]}>
        <Col span={6}>
            <h1 className="grey-text">{t("consumos.tab1.text.greytext1")}</h1><h1 className="bold-text">{'Consumo'}</h1> 
        </Col>
        <Col span={12}>
            <h1 className="grey-text">{t("consumos.tab1.text.greytext2")}</h1><h1 className="bold-text">{'Compras/Devolución/Contrap Mon Local '}</h1>
        </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext3")}</h4><h1 className="bold-text">{'559997XXXXX'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext4")} </h4><h1 className="bold-text">{'11261'}</h1> 
	      </Col>
        <Col span={6}>
            <h1 className="grey-text">{t("consumos.tab1.text.greytext5")}</h1><h1 className="bold-text">{'14591'}</h1> 
        </Col>
        <Col span={6}>
            <h1 className="grey-text">{t("consumos.tab1.text.greytext6")}</h1><h1 className="bold-text">{'-'}</h1>
        </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext7")}</h4><h1 className="bold-text">{'22/07/21 00:00:00'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext8")}</h4><h1 className="bold-text">{'1'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext9")}</h4><h1 className="bold-text">{'Dolar de EEUU'}</h1> 
	      </Col>
        <Col span={6}>
            <h1 className="grey-text">{t("consumos.tab1.text.greytext10")}</h1><h1 className="bold-text">{'-'}</h1>
        </Col>
        <Col span={6}>
            <h1 className="grey-text">{t("consumos.tab1.text.greytext11")}</h1><h1 className="bold-text">{'2398548'}</h1>
        </Col> 
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext12")}</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col> 
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext13")}</h4><h1 className="bold-text">{'No'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext14")}</h4><h1 className="bold-text">{'381,76'}</h1> 
	      </Col>
        <Col span={6}>
            <h1 className="grey-text">{t("consumos.tab1.text.greytext15")}</h1><h1 className="bold-text">{'%'}</h1> 
        </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext16")}</h4><h1 className="bold-text">{'0,00'}</h1>
        </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext17")}</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext18")}</h4><h1 className="bold-text">{'-'}</h1> 
	      </Col>
        <Col span={6}>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext19")}</h4><h1 className="bold-text">{'02/03/2020'}</h1> 
	      </Col>
      </Row>   <br></br>
            <h4 className="grey-text">{t("consumos.tab1.text.greytext20")}</h4><h4 className="bold-text">Spotify \C. PROLONGACION AVDA MEDI0 \Stockholm\04006 SWE</h4>
	      

      <Divider style={{'background-color':'#DADADA'}}></Divider> <h2>Detalles de Cuotas</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "10% 7%", 
          flexDirection: "row",
        }}
      >   
          <h3>
          {t("consumos.tab1.div.h1")}<h5>0/1</h5>
          </h3>
          <h3>
          {t("consumos.tab1.div.h2")}<h5>381,76</h5>
          </h3>
          <h3>
          {t("consumos.tab1.div.h3")}<h5>0%</h5>
          </h3>
          <h3>
          {t("consumos.tab1.div.h4")}<h5>0,0</h5>
          </h3>
          <h3>
          {t("consumos.tab1.div.h5")}<h5>N/A</h5>
          </h3>
          <h3>
          {t("consumos.tab1.div.h6")}<h5>N/A</h5>
          </h3>
          <h3>
          {t("consumos.tab1.div.h7")}<h5>N</h5>
          </h3>

      </div>
    </Card>
  );
};

export default DatosConsumo;
