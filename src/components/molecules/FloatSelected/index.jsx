import React, { useState } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";

import "./index.less";

const FloatSelected = ({
  options,
  showSearch,
  outline,
  secondaryColor,
  width,
  mode,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, disabled, required, defaultValue } = props;

  value = defaultValue;

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  const selectOutline = outline ? "select-outline" : "select-bottom";

  const secondary = secondaryColor ? "secondary" : "";

  const [borderColor, setBorderColor] = useState("");

  return (
    <div
      className={`float-label ${selectOutline} ${secondary}`}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {/* Modos disponibles : "tags" */}
      <Select
        suffixIcon={props.suffix}
        mode={mode}
        maxTagCount="responsive"
        style={{ width: width }}
        onChange={props.onChange}
        disabled={disabled}
        showSearch={props.showSearch}
        defaultValue={defaultValue}
        // className={ !outline? "select-bottom" : '' }
      >
        {options.map((opt, index) => (
          <Select.Option value={opt.value} disabled={opt.disabled} key={index}>
            {opt.icon}
            {opt.title}
          </Select.Option>
        ))}
      </Select>
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

FloatSelected.propTypes = {
  options: PropTypes.array,
  outline: PropTypes.bool,
};

FloatSelected.defaultProps = {
  options: [],
  outline: false,
};

export default FloatSelected;
