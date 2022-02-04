import React from 'react';
import SearchForm from '../../../../components/organisms/SearchForm';
import PlasticosSearchArray from './mockPlasticos'



export default function Plasticos() {
  
  const handleCallback = (values) => {
      console.log(values);
  }
  
  return <div>

      <SearchForm title="Búsqueda de plásticos" span={6} array={PlasticosSearchArray} parentCallback={handleCallback}/>
  </div>;
}
