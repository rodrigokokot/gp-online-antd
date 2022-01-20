import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Cascader, Divider } from "antd";

function FilterComponent() {
  const options = [
    {
      label: "Emisor",
      value: "emisor",
      children: [
        {
          label: "Laura",
          value: "laura",
        },
        {
          label: "Pedro",
          value: "pedro",
        },
      ],
    },
    {
      label: "Bamboo",
      value: "bamboo",
      children: [
        {
          label: "Little",
          value: "little",
          children: [
            {
              label: "Toy Fish",
              value: "fish",
            },
            {
              label: "Toy Cards",
              value: "cards",
            },
            {
              label: "Toy Bird",
              value: "bird",
            },
          ],
        },
      ],
    },
  ];

  function dropdownRender(menus) {
    return (
      <div>
        {menus}
        <Divider style={{ margin: 0 }} />
      </div>
    );
  }

  function onChange(value) {
    console.log(value);
  }

  return (
    <>
      <div>
        
      </div>
      <div>
        <div>
          <p>Emisor</p>
          <Cascader
            style={{ width: 500 }}
            options={options}
            onChange={onChange}
            multiple
            dropdownRender={dropdownRender}
            maxTagCount="responsive"
          />
        </div>
        <div>
          <p>Marca</p>
          <Cascader
            style={{ width: 500 }}
            options={options}
            onChange={onChange}
            multiple
            dropdownRender={dropdownRender}
            maxTagCount="responsive"
          />
        </div>
        <div>
          <p>Reseptor</p>
          <Cascader
            style={{ width: 500 }}
            options={options}
            onChange={onChange}
            multiple
            dropdownRender={dropdownRender}
            maxTagCount="responsive"
          />
        </div>
        <div>
          <p>Sucursal</p>
          <Cascader
            style={{ width: 500 }}
            options={options}
            onChange={onChange}
            multiple
            dropdownRender={dropdownRender}
            maxTagCount="responsive"
          />
        </div>
        <div>
          <p>Producto</p>
          <Cascader
            style={{ width: 500 }}
            options={options}
            onChange={onChange}
            multiple
            dropdownRender={dropdownRender}
            maxTagCount="responsive"
          />
        </div>
      </div>
    </>
  );
}

export default FilterComponent;
