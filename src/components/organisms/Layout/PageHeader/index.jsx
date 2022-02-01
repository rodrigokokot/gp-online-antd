import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumComponent from "../../../molecules/Breadcrum";
import { Col, PageHeader, Row, Typography } from 'antd';

const PageHeaderLayout = ({title , ...props}) => {
    const userName = "Norma Cardozo"
    const userType = "Customer Experience Manager"

    return (
        <PageHeader>
            <BreadcrumComponent />
            <Row>
                <Col a={12}>
                    <Typography.Title size={2} >
                        {title}
                    </Typography.Title>

                </Col>
                <Col a={5} offset={7} style={{display: 'flex', flexDirection:'column'}}>
                    <Typography.Text strong style={{ marginTop: '20px', marginLeft: 'auto' }} >
                        {userName}
                    </Typography.Text>
                    <Typography.Text style={{ marginLeft: 'auto' }}>
                        {userType}
                    </Typography.Text>
                </Col>
            </Row>
        </PageHeader>
    );
};

PageHeaderLayout.propTypes = {
    title: PropTypes.string
};

export default PageHeaderLayout;
