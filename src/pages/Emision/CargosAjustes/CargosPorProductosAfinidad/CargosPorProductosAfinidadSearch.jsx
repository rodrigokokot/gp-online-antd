import React from 'react';
import { CargoPorProductosAfinidadSearchArray } from './mock';
import SearchForm from '../../../../components/organisms/SearchForm'

export default function index() {
  return <div>
    <SearchForm array={CargoPorProductosAfinidadSearchArray} title="Búsqueda de tipos de Cargos a Socios por producto y grupo de afinidad" span={6}/>
  </div>;
}
