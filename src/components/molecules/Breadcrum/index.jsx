import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';

const BreadcrumComponent = ({props}) => {
  return (
    <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  )
};

BreadcrumComponent.propTypes = {};

export default BreadcrumComponent;
