import useTodosContext from '../lib/hooks';

const Counter = () => {
  const { numberOfCompletedTodos, totalNumberOfTodos } = useTodosContext();
  return (
    <p>
      <b>{numberOfCompletedTodos}</b>/{totalNumberOfTodos}
      Todos completed
    </p>
  );
};

export default Counter;
