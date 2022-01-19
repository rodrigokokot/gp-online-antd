import React from "react";
import { Form, Col} from "antd";
import {SearchForm} from '../../molecules/SearchForm/index'
import { GestionSucursalesSearch } from "../../../searches/GestionSucursalesSearch";

export const AdvancedSearchForm = () => {

  const children = [];

  const getFields = () => {
    GestionSucursalesSearch().map((item, i) => {
      children.push(
        <Col key={i}>
          <Form.Item name={i}>{item}</Form.Item>
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