// 動物名の表示を行う
import AnimalItem from "./AnimalItem";

const AnimalList = ({animals}) => {
  if (animals.length === 0) {
    return <p>動物が見つかりません。</p>;
  }

  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem animal={animal} key={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;