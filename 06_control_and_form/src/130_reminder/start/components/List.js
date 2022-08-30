const List = ({ todolist, deleteTodo }) => {
  return (
    <>
      {todolist.map(todo => {
        return (
          <div key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}>
              完了
            </button>
            <span>{todo.content}</span>
          </div>
        )
      })}
    </>
  );
};

export default List;