import React from "react";
import { Form, Col} from "antd";
import {SearchForm} from '../../molecules/SearchForm/index'


export const AdvancedSearchForm = ({array}) => {

  const children = [];

  const getFields = () => {
    array.map((item) => {
      children.push(
        <Col key={item.name}>
          <Form.Item name={item.name}>{item.input}</Form.Item>
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