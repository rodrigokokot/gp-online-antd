import React from 'react';
import Icon from "@ant-design/icons";
import { FileSearchImg } from "../../../assets/svg/img";
import PropTypes from 'prop-types'

import { Typography } from "antd";


const ResultSearch = ({result}) => {
    const text = result?
    'Aquí se mostrarán los resultados de su búsqueda' :
    'La búsqueda no produjo resultados'


  return(
    <div  style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <Icon component={FileSearchImg} />
        <Typography.Title level={5} >
            {text}
        </Typography.Title>
    </div>
  );
};

export default ResultSearch;

ResultSearch.prototype ={
    result: PropTypes.bool
}

ResultSearch.defaultProps = {
    result: true
}
