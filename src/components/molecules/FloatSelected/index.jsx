import React, { useState } from "react";
import { Input, Select } from "antd";

import "./index.less";

const FloatSelected = ({options, ...props}) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required } = props;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {/* <Input onChange={props.onChange} type={type} defaultValue={value} className="input-bottom" /> */}
      <Select onChange={props.onChange} className="select-bottom">
        {
          options && options.map((opt, index) => <Select.Option value={opt.value} disabled={opt.disabled} key={index}>{opt.title}</Select.Option>)
        }
      </Select>
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatSelected;