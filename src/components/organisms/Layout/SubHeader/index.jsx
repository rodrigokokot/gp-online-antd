import React from 'react';
import PropTypes from 'prop-types';
import { Image, Layout, Select, Typography,Button } from "antd";
import './index.less'

const arrayLogos = [
  {
    img: 'Uala',
    name: 'Uala',
    title: 'Uala'
  },
  {
    img: 'Banco de Cordoba',
    name: 'BancoDeCordoba',
    title: ''
  },
  {
    img: 'Naranja',
    name: 'Naranja',
    title: 'Naranja X'
  },
  {
    img: 'Pago24',
    name: 'Pago24',
    title: ''
  },
]

const SubHeaderLayout = ({props}) => {
  return (
    <Layout.Header className="sub-header">
        <div className="container-logo">
          <Select defaultValue="" bordered={false}>
            <Select.Option value="">
              <Typography.Text>Selecciona una entidad</Typography.Text>
            </Select.Option>
            <Select.Option value="all">
              <Typography.Text>Todas las entidades</Typography.Text>
            </Select.Option>
            {
              arrayLogos.map((logo, index) => (
                <Select.Option value={logo.name} key={index}>
                  <Image
                    style={{ verticalAlign: 'middle' }}
                    preview={false}
                    width={!logo.title? 70 : 28}
                    src={ require(`../../../../assets/png/entidades/${logo.img}.png`) }
                  />
                  <Typography.Text style={{ marginLeft: '10px', verticalAlign: 'middle' }}>{logo.title}</Typography.Text>
                </Select.Option>
              ))
            }
          </Select>
        </div>
        <div className="container-btn">
          <Button type="primary" size='small' style={{ height: '32px', width: '166px' }}>Nueva cuenta</Button>
        </div>
    </Layout.Header>

  );
};

SubHeaderLayout.propTypes = {};

export default SubHeaderLayout;