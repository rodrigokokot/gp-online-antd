import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Cascader, Divider } from "antd";
import { useState } from "react/cjs/react.development";

function FilterComponent({options,parentCallback,index}) {
  
  const [filters,setFilters] = useState([])
  function dropdownRender(menus) {
    return (
      <div>
        {menus}
        <Divider style={{ margin: 0 }} />
      </div>
    );
  }

  function onChange(value) {
    // console.log(value);
    parentCallback(value,index);
  }

  return (
    <>
      <Cascader
        style={{ width: 500 }}
        options={options}
        onChange={onChange}
        multiple
        dropdownRender={dropdownRender}
        maxTagCount="responsive"
      />
    </>
  );
}

export default FilterComponent;
