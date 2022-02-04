import React, { useState } from 'react';
import Export from '../../../../components/organisms/Export';
import Table from '../../../../components/organisms/Table';
import SearchForm from '../../../../components/organisms/SearchForm';
import {PlasticosSearchArray, dataPlasticos,columnsPlasticos} from './mockPlasticos'



export default function Plasticos() {
  
  const [exportflag, setExportflag] = useState(true);

  const handleCallback = (values) => {
      console.log(values);
      setExportflag(false);
  }
  
  return <div>
        <Export dataExport={dataPlasticos} disabled={exportflag}/>
      <SearchForm title="Búsqueda de plásticos" span={6} array={PlasticosSearchArray} parentCallback={handleCallback}/>
      <Table columns={columnsPlasticos} data={dataPlasticos} expandible={false} editable={true} />
  </div>;
}
