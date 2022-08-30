import { useState } from "react"

import List from "./List";
import Form from "./Form";

const Todo = () => {
  const initList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(initList);

  // Todoを削除する関数．
  const deleteTodo = (id) => {
    let newTodos = todos.filter(todo => (todo.id !== id))
    setTodos(newTodos);
  }

  // Todoを追加する関数．
  /*const createTodo = (title) => {
    let newid = todos.length + 1;
    let newTodos = todos.push(
      {
        id: newid,
        content: title,
      }
    );
    setTodos(newTodos);
  }*/
  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <h2>Reminder</h2>
      <List todolist={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;