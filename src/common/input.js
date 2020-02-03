import React from "react";

const Input = ({ name, onChange, value, label }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name"> {label}</label>
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          id="name"
          name="name"
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
