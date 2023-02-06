import React from "react";

const Button = ({ classname, handler, children }) => {
  return (
    <button className={classname} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
