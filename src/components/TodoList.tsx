import DeleteButton from './DeleteButton';
import useTodosContext from '../lib/hooks';

const TodoList = () => {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();

  return (
    <ul className="">
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding todo
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-[8px] h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span
            className={` ${
              todo.isCompleted === true ? 'line-through text-[#ccc]' : ''
            }`}
          >
            {todo.text}
          </span>

          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
