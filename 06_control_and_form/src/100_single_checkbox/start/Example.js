import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <label key="1">
        check this box.
        <input
          type="checkbox"
          checked={isChecked}
          onChange={()=>setIsChecked(!isChecked)}
        />
      </label>
      <div>Status: <u>{isChecked ? "選択済み" : "未選択"}</u></div>
    </>
  );
};

export default Example;
