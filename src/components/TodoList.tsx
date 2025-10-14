import DeleteButton from './DeleteButton';
import useTodosContext from '../lib/hooks';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = () => {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();

  return (
    <ul className="max-h-[420px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 transition-colors duration-300">
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding todo
        </li>
      )}

      <AnimatePresence>
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex justify-between items-center px-[8px] h-[50px] text-[14px] cursor-pointer border-b border-black/[8%] hover:bg-gray-50 transition-colors duration-300"
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
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
