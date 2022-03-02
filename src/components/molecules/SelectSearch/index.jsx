import React from 'react';
import { Select} from 'antd';
import { SearchOutlined  } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'; 
const { Option } = Select; 
function SelectSearch (props)  {
  const { t} = useTranslation();
  const {texto}=props; const {Setear}=props;
  function onChange(value) {
    const idd = texto.findIndex(e => e.title === value) 
    Setear(idd)
  }

  return <Select 
              showSearch style={{width: '100%'}} 
              placeholder={t("ayuda.search")}
              optionFilterProp="children"
              suffixIcon={<SearchOutlined />} 
              onChange={onChange} 
              filterOption={(input, option) =>  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 || option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
          >   
              {texto.map((p,j) => <Option key={p.title} value={p.title} >{p.title}</Option>)}
          </Select> 
};

export default SelectSearch;