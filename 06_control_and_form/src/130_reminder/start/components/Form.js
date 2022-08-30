import { useState } from "react";

const Form = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: title,
    };
    createTodo(newTodo);
    setTitle("");   // 入力欄の初期化
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          //placeholder="追加するタスクを入力"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;