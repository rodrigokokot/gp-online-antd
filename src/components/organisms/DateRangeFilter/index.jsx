import React, { useState } from "react";
import { Card, Button, Row, Col, TimePicker, Radio, Modal } from "antd";
import Icon, { HomeOutlined } from "@ant-design/icons";
import DateRangeComponent from "../../molecules/DateRangePicker";
import eoLocale from "date-fns/locale/es";
import { format } from "date-fns";
import { CalendarIcon } from "../../../assets/svg/icons/calendar";
import "./index.less";

function DateRangeFilter() {
  const [startDate, setStartDate] = useState(null);
  const [endtDate, setEndtDate] = useState(null);
  const [searchType, setSearchType] = React.useState(2);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dateSelected = (data) => {
    setStartDate(
      format(new Date(data[0].startDate), "dd 'de' MMMM yyyy", {
        locale: eoLocale,
      })
    );
    setEndtDate(
      format(new Date(data[0].endDate), "dd 'de' MMMM yyyy", {
        locale: eoLocale,
      })
    );
  };

  return (
    <div>
      <Button
        className="btn-date-range"
        type="text"
        icon={<Icon component={CalendarIcon} />}
        onClick={() => setIsModalVisible(true)}
      >
        Por fechas
      </Button>
      <Modal
        className="search-date-range"
        closable={false}
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        width={1000}
      >
        <Row gutter={20}>
          <Col className="gutter-row" a={16}>
            <Card
              style={{
                width: "635px",
                height: "682px",
                left: "0px",
                top: "14px",
              }}
            >
              <p>
                Buscar por:
                <Radio.Group
                  style={{ marginLeft: "10px" }}
                  onChange={(e) => setSearchType(e.target.value)}
                  value={searchType}
                >
                  <Radio value={1}>Fecha de presentación</Radio>
                  <Radio value={2}>Fecha de origen</Radio>
                </Radio.Group>
              </p>

              <DateRangeComponent
                className="width-card"
                dateSelected={dateSelected}
              />

              <p>
                <b>Desde:</b> {startDate}
              </p>
              <p>
                <b>Hasta:</b> {endtDate}
              </p>

              <Button type="primary">Aplicar</Button>
              <Button type="text" style={{ marginLeft: "20px" }}>
                Limpiar filtros
              </Button>
            </Card>
          </Col>
          <Col className="gutter-row" a={4}>
            <Card
              style={{
                width: "260px",
                height: "682px",
                top: "14px",
              }}
            >
              <div style={{ marginTop: "95px", left: "12px" }}>
                <p>
                  <b>Desde:</b>{" "}
                  <TimePicker
                    style={{ borderRadius: "8px", height: "45px" }}
                    type="time"
                    onChange={(value) => console.log(value)}
                    placeholder="00:00:00"
                  />
                </p>
                <p>
                  <b>Hasta:</b>{" "}
                  <TimePicker
                    style={{ borderRadius: "8px", height: "45px" }}
                    type="time"
                    onChange={(value) => console.log(value)}
                    placeholder="00:00:00"
                  />
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default DateRangeFilter;
