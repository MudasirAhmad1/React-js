import React from "react";
import useInput from "./useInput";

function InputExample() {
  const name = useInput();

  return (
    <div>
      <input type="text" {...name} />
      <p>Hello, {name.value}!</p>
    </div>
  );
}

export default InputExample;
