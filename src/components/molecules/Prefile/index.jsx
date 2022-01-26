import React from 'react';
import { Avatar, Typography, Divider, Select } from 'antd';


const Profile = () => {
  return (
    <div>
        <Avatar size={100} style={{ background: '#69E2B7', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }} >NC</Avatar>
        <Typography.Title level={4} style={{textAlign: 'center'}}>Norma Cardozo</Typography.Title>
        <Typography.Text disabled style={{textAlign: 'center'}}>norma.cardozo@gponline.com</Typography.Text>
        <Divider />
        <Typography.Title level={5} disabled>Horas online hoy  6 horas 26 min</Typography.Title>
        <Divider />
        <Typography.Title level={5}>
            Estado
            <Select defaultValue={'Break - Off'} style={{ width: 120, float: 'right' }} bordered={false} size='small'>
                <Select.Option value="Break - Off">Break - Off</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
        </Typography.Title>
        <Divider />
        <Typography.Title level={5}>
            Idioma
            <Select defaultValue={'Portugúes'} style={{ width: 120, float: 'right' }} bordered={false} size='small'>
                <Select.Option value="Portugúes">Portugúes</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
        </Typography.Title>
        <Divider />
        <Typography.Title level={5}>Ayuda</Typography.Title>
        <Divider />
        <Typography.Title level={5}>Cerrar sesión</Typography.Title>
        <Divider />
        <Typography.Text disabled>Última versión: 20/08/2021</Typography.Text>
    </div>
  )
};

export default Profile;
