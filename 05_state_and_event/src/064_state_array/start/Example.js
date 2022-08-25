import { useState } from "react";

const Example = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);
  const shuffle = () => {
    let newNums = [...nums];
    let lastV = newNums.pop();
    newNums.unshift(lastV);
    setNums(newNums);
  }

  return (
    <>
      <h1>{nums}</h1>
      <button onClick ={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
