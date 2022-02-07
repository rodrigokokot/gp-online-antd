import { Image, Layout, Select, Typography, Button } from "antd";
import React from "react";
import { MonedaBolivar, MonedaFranco, MonedaLibra } from "../../../assets/svg/icons/moenda";

const monedas = [
  {
    img: "England",
    name: "Libra",
    title: "Libra",
  },
  {
    img: "Bolivia",
    name: "Peso fuerte",
    title: "Peso Fuerte",
  },
  {
    img: "Suiza",
    name: "Franco",
    title: "Franco",
  },
];

const SelectImg = () => {
  return (
    <>
      <Select  bordered={false} style={{ width: 190 }} placeholder="Moneda">
        {monedas.map((logo, index) => (
          <Select.Option value={logo.name} key={index}>
            <Image
              style={{ verticalAlign: "middle" }}
              preview={false}
              width={!logo.title ? 70 : 28}
              src={require(`../../../assets/png/banderas/${logo.img}.png`)}
            />
            <Typography.Text
              style={{ marginLeft: "10px", verticalAlign: "middle" }}
            >
              {logo.title}
            </Typography.Text>
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export default SelectImg;
