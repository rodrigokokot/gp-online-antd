import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from "antd";


const SubHeaderLayout = ({props}) => {
  return (
    <Layout.Header className="sub-header">
        <div className="container-logo">
        </div>
        <div className="container-user">
        {/* <Icon component={UserIcon} /> */}
        </div>
    </Layout.Header>

  );
};

SubHeaderLayout.propTypes = {};

export default SubHeaderLayout;
