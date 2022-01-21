import React from "react";
import { Form, Col} from "antd";
import {SearchForm} from '../../molecules/SearchForm/index'
import { GestionSucursalesSearch } from "../../../searches/GestionSucursalesSearch";

export const AdvancedSearchForm = () => {

  const children = [];

  const getFields = () => {
    GestionSucursalesSearch().map((item) => {
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