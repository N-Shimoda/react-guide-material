import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" children = {
          [
            <Profile key="0" {...profile[0]}/>,
            <Profile key="1" {...profile[1]}/>
          ]
        }/>
    </div>
  );
};

export default Example;
