import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState();
  return (
    <>
      <input
      type = "int"
      onChange = {(e)=>{
        setVal(e.target.value);
      }} /> = {val}
    </>
  );
};

export default Example;
