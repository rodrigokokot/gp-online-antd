import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';


const BreadcrumComponent = ({props}) => {
  const location = useLocation();
  const arrayLocation = location.pathname.split('/')

  return (
    arrayLocation.length > 2 &&  <Breadcrumb separator=">">
      {
        arrayLocation.map(( element, index ) =>
          element.length > 0 &&  <Breadcrumb.Item href="" key={index}>{ (element.charAt(0).toUpperCase() + element.slice(1) ).split(/(?=[A-Z])/).join(' ')}</Breadcrumb.Item>
        )
      }
    </Breadcrumb>
  )
};

BreadcrumComponent.propTypes = {};

export default BreadcrumComponent;
