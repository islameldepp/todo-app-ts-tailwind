import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';

const useTodosContext = () => {
  const contex = useContext(TodosContext);
  if (!contex) {
    throw new Error('Forget to add provider');
  }
  return contex;
};

export default useTodosContext;
