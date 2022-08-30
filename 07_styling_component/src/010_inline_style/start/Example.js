import { useState } from "react"

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected(prev => !prev);

  const my_style = {
    width: 140,
    height: 70,
    fontWeight: "bold",
    cursor: "pointer",
    "border-radius": 9999,
    border: "none",
    display: "block",
    margin: "auto",
    backgroundColor: isSelected ? "green" : "blue"
  }

  return (
    <>
      <button style={my_style} onClick={clickHandler}>ボタン</button>
      <div style={{textAlign: "center"}}>{isSelected && "クリックされました。"}</div>
    </>
  )
};

export default Example;
