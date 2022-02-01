import React, { useState } from "react";
import { Input } from "antd";
import PropTypes from 'prop-types'
import "./index.less";

const FloatInput = ({outline, secondaryColor,disabled, ...props}) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required } = props;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  const genericClass = {
    outline: 0,
    borderWidth: '0 0 2px',
    boxShadow: 'none'
  }

  const primaryClass = {
    borderColor: 'primary',
    ...genericClass
  }

  const secondaryClass = {
    borderColor: '#ab218e',
    ...genericClass
  }

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Input disabled={disabled} onChange={props.onChange} type={type} defaultValue={value} style={ !outline? !secondaryColor? primaryClass : secondaryClass : '' } />
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

FloatInput.propTypes = {
  outline: PropTypes.bool,
  secondaryColor: PropTypes.bool
}

FloatInput.defaultProps = {
  outline: false,
  secondaryColor: false
}

export default FloatInput;