import { useState } from "react";

const Example = () => {
  // 果物の名前、値段、選択状況を格納するリスト
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
    { label: "Pineapple", value: 150, checked: false }
  ]);
  // 果物の合計金額
  const [sum, setSum] = useState(0);

  // チェックボックスの変更をfruitsに反映する関数．
  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
      }
      return newFruit;
    })
    setFruits(newFruits);
    let sumVal = 0;
    newFruits
      .filter((fruit) => fruit.checked)
      .forEach((fruit) => (sumVal += fruit.value));
    setSum(sumVal);
  }

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input
              id={fruit.label} ß
              type="checkbox"
              value={fruit.label}
              checked={fruit.checked}
              onChange={handleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}: ${fruit.value}
            </label>
          </div>
        )
      })}
      <div>合計：${sum}</div>
    </div>
  );
};

export default Example;
