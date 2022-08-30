import { useState } from "react";

const Example = () => {
  const OPTIONS = ["Apple", "Orange", "Banana", "Cherry"];
  const [selected, setSelected] = useState(OPTIONS[0])

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <div>選択した果物：{selected}</div>
    </>
  );
};

export default Example;
