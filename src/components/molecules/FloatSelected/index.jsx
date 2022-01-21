import React, { useState } from "react";
import { Select } from "antd";
import PropTypes from 'prop-types'

import "./index.less";

const FloatSelected = ({options, outline, width, ...props}) => {
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
      <Select style={{width: width}} onChange={props.onChange} className={ !outline? "select-bottom" : '' } >
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

FloatSelected.propTypes = {
  options: PropTypes.array,
  outline: PropTypes.bool
}

FloatSelected.defaultProps = {
  options: [],
  outline: false
}

export default FloatSelected;