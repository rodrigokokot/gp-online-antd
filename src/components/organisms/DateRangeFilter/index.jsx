import React, { useState } from "react";
import { Card, Button, Row, Col, TimePicker, Radio, Modal } from "antd";
import Icon from "@ant-design/icons";
import DateRangeComponent from "../../molecules/DateRangePicker";
import eoLocale from "date-fns/locale/es";
import { format } from "date-fns";
import { CalendarIcon } from "../../../assets/svg/icons/calendar";
import "./index.less";
import { useBetween } from "use-between";
import useRangePicker from "../../../hooks/useRangePicker";

function DateRangeFilter() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [searchType, setSearchType] = useState(2);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { setStateRangePicker, setHoursRangePicker, setSearchTypeRangePicker, searchType } = useBetween(useRangePicker);
  const [picker, setPicker] = useState(null);

  const dateSelected = (data) => {
    setPicker(data);
  };

  const submitFilters =  () => {
    setStateRangePicker(picker)
    setHoursRangePicker({
      startHour: format(new Date(startDate), "HH:mm:ss"),
      endHour: format(new Date(endDate), "HH:mm:ss"),
    })
    setIsModalVisible(false)
  }

  const resetFilters = () => {
    setStateRangePicker()
    setHoursRangePicker()
    setSearchTypeRangePicker()
  }

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
          <Col className="gutter-row" span={16}>
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
                  onChange={(e) => setSearchTypeRangePicker(e.target.value)}
                  value={searchType}
                >
                  <Radio value="presentacion">Fecha de presentación</Radio>
                  <Radio value="origen">Fecha de origen</Radio>
                </Radio.Group>
              </p>

              <DateRangeComponent
                className="width-card"
                dateSelected={dateSelected}
              />

              <p>
                <b>Desde:</b> {picker? format(new Date(picker[0].startDate), "dd 'de' MMMM yyyy", { locale: eoLocale }) : ''}
              </p>
              <p>
                <b>Hasta:</b> {picker? format(new Date(picker[0].endDate), "dd 'de' MMMM yyyy", { locale: eoLocale }) : ''}
              </p>

              <Button type="primary" onClick={submitFilters}>Aplicar</Button>
              <Button type="text" style={{ marginLeft: "20px" }} onClick={resetFilters}>
                Limpiar filtros
              </Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={4}>
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
                    onChange={(value) => { setStartDate(value)}}
                    placeholder="00:00:00"
                  />
                </p>
                <p>
                  <b>Hasta:</b>{" "}
                  <TimePicker
                    style={{ borderRadius: "8px", height: "45px" }}
                    type="time"
                    onChange={(value) => setEndDate(value)}
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
