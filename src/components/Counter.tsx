import useTodosContext from '../lib/hooks';

const Counter = () => {
  const { numberOfCompletedTodos, totalNumberOfTodos } = useTodosContext();
  return (
    <p className="text-sm sm:text-base">
      <b>{numberOfCompletedTodos}</b>/{totalNumberOfTodos}
      Todos completed
    </p>
  );
};

export default Counter;
