import React from 'react'
import {Select} from 'antd'
import FloatInput from '../components/molecules/FloatInput/index';



export const GestionSucursalesSearch = () => {
   const {Option} = Select;
   const array = [
    <FloatInput placeholder="Descripción"  label='Descripcion' />,
    
    <FloatInput placeholder="Código" label='Código' />,
    
    <FloatInput placeholder="Código Postal" label='Código Postal' />,

    <Select placeholder="Provincia" label='Provincia'>
      <Option value="San Juan">San Juan</Option>
      <Option value="Mendoza">Mendoza</Option>
      <Option value="San Luis">San Luis</Option>
    </Select>,

    <Select placeholder="Estado" label='Estado'>
      <Option value="Activo">Activo</Option>
      <Option value="Suspendido">Suspendido</Option>
      <Option value="Cancelado">Cancelado</Option>
    </Select>,
  ];
    return array
}