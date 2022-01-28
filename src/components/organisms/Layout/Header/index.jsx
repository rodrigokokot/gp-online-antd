import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Popover } from "antd";
import { Link } from "react-router-dom";
import Icon from "@ant-design/icons";
import { LogoIcon, GradientIcon, UserIcon } from "../../../../assets/svg/icons";
import Profile from '../../../molecules/Profile';

const HeaderLayout = ({props}) => {
  return (
    <Layout.Header className="header">
        <div className="container-logo">
        <Link to="/home" className="logo">
            <Icon component={LogoIcon} />
        </Link>
        </div>
        <div className="container-user">
        <Popover placement="bottom" content={Profile} trigger="click">
            <Icon component={UserIcon} />
        </Popover>
        </div>
        <Icon className="linear-gradient" component={GradientIcon}></Icon>
    </Layout.Header>
);
};

HeaderLayout.propTypes = {};

export default HeaderLayout;
