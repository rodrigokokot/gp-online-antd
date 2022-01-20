import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "antd";
import FilterComponent from "../../molecules/FilterComponent";
import Icon, { HomeOutlined } from "@ant-design/icons";
import { FilterIcon } from "../../../assets/svg/icons/filter";

function Filter({ filtros, message }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  let array = [null,null,null,null,null];

  function handleCallback(childData,index) {
    array[index] = childData;
    console.log('returned from child:',array);
    // setChildData(childData);
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
          <Col className="gutter-row" span={16}>
            <Card
              style={{
                height: "400px",
                width: "1000px",
                left: "0px",
                top: "40px",
              }}
            >
              {filtros?.map((filtro, index) => (
                <>
                  <p>{filtro.title}</p>
                  <FilterComponent
                    key={index}
                    options={filtro.options}
                    message={message}
                    parentCallback={handleCallback}
                    index={index}
                  ></FilterComponent>
                </>
              ))}
            </Card>
          </Col>
          <Col>
          <Button type="primary" style={{justifySelf:"right"}}>Confirmar</Button>
          </Col>
        </Row>
        
          
        
      </Modal>
    </>
  );
}

export default Filter;
