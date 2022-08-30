// 動物名の表示方法の定義
// "Dog"には星をつけて出力する
const AnimalItem = ({ animal }) => {
  return (
    <li key={animal}>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  );
};

export default AnimalItem;