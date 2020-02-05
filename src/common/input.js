import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}> {label}</label>
        <input {...rest} id={name} name={name} className="form-control" />
      </div>
      {error && (
        <div style={{ color: "white", background: "tomato" }}>{error}</div>
      )}
    </div>
  );
};

export default Input;
