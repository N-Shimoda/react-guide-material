import { useState } from "react";

const Example = () => {
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  const [fruit, setFruit] = useState("Apple");

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      {RADIO_COLLECTION.map(value => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={(e)=>setFruit(e.target.value)}
            />
            {value}
          </label>
        )
      })}
      <h3>"{fruit}"が選択されています．</h3>
    </>
  );
};

export default Example;
