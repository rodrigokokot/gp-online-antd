import React from "react";
import { Form, Col} from "antd";
import {SearchForm} from '../../molecules/SearchForm/index'


export const AdvancedSearchForm = ({array}) => {

  const children = [];

  const getFields = () => {
    array.map((item) => {
      children.push(
        <Col key={item.index}>
          <Form.Item name={item.index}>{item.input}</Form.Item>
          {/* Convierto el nombre en lowercase y le saco los espacios */}
        </Col>
      );
    });

    return children;
  };

  return (
    <>
      <SearchForm array={getFields()} />

    </>
  );
};