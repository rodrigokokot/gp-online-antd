import React, { useState } from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import "./index.less";

const FloatInput = ({ outline, secondaryColor, disabled, ...props }) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required, defaultValue } = props;

  value = defaultValue;

  if (!placeholder) placeholder = defaultValue? undefined : label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  const [borderColor, setBorderColor] = useState("")

  const genericClass = {
    outline: 0,
    borderWidth: "0 0 2px",
    boxShadow: "none",
  };

  const primaryClass = {
    borderColor: "primary",
    ...genericClass,
  };

  const secondaryClass = {
    borderColor: borderColor,
    ...genericClass,
  };

  return (
    <div
      className="float-label"
      onBlur={() => {setFocus(false);  setBorderColor(secondaryColor && !focus? "#ab218e" : "") }}
      onFocus={() => {setFocus(true); setBorderColor(secondaryColor && !focus? "#ab218e" : "") }}
      onMouseEnter={() => secondaryColor? setBorderColor("#ab218e") : null }
      onMouseLeave={() => secondaryColor && !focus? setBorderColor("") : null }
    >
      <Input
        disabled={disabled}
        onChange={props.onChange}
        type={type}
        defaultValue={defaultValue}
        style={
          !outline
            ? !secondaryColor
              ? primaryClass
              : secondaryClass
            : secondaryColor
            ? {
                borderColor: "#ab218e",
                borderRadius: "0.5em",
                boxShadow: "#ab218e",
              }
            : { borderRadius: "0.5em" }
        }
      />
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

FloatInput.propTypes = {
  outline: PropTypes.bool,
  secondaryColor: PropTypes.bool,
};

FloatInput.defaultProps = {
  outline: false,
  secondaryColor: false,
};

export default FloatInput;
