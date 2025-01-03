import React from "react";

function Input(props) {
  return (
    <>
      <div className={props.className}>
        <span className={props.spanClassName} id="basic-addon1">
          {props.icon}
        </span>
        {props.inputClassName && (
          <input
            id={props.id}
            type={props.type}
            value={props.value}
            className={props.inputClassName}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            placeholder={props.placeholder}
            checked={props.checked}
            aria-label={props.ariaLabel}
            aria-describedby="basic-addon1"
          />
        )}
      </div>
    </>
  );
}
export default Input;
