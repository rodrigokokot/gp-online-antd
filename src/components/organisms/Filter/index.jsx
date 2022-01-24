import React, { useState } from "react";
import { Card, Button, Row, Col, Modal, Empty } from "antd";
import FilterComponent from "../../molecules/FilterComponent";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { FilterIcon } from "../../../assets/svg/icons/filter";

function Filter({ filtros, parentCallback }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let clearInput = false;

  let array = [[],[],[],[],[]];

  function handleCallback(childData, index) {
    array[index] = childData;
  }

  function filterConfirm() {
    parentCallback(array,false);
  }

  function filterClean(){
    array = [[],[],[],[],[]];
    parentCallback(array,true);
  }

  return (
    <>
      <Button
        type="text"
        onClick={() => setIsModalVisible(true)}
        style={{ color: "#313131" }}
        icon={<Icon component={FilterIcon} />}
      >
        Filtrar
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
          <Card
            style={{
              height: "400px",
              width: "1000px",
              left: "0px",
              top: "0px",
            }}
          >
            <Col className="gutter-row" span={16}>
              {filtros?.map((filtro, index) => (
                <>
                  <p>{filtro.title}</p>
                  <FilterComponent
                    key={index}
                    options={filtro.options}
                    parentCallback={handleCallback}
                    index={index}
                  ></FilterComponent>
                </>
              ))}
              <Button
                type="primary"
                style={{ justifySelf: "right" }}
                onClick={filterConfirm}
              >
                Confirmar
              </Button>
              <Button
                style={{ justifySelf: "right" }}
                onClick={filterClean}
              >
                Limpiar filtros
              </Button>
            </Col>
          </Card>
        </Row>
      </Modal>
    </>
  );
}

export default Filter;
