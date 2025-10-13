import { useState } from 'react';
import Button from './Button';

import useTodosContext from '../lib/hooks';

const AddTodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const { handleAddTodo } = useTodosContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText('');
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[0] text-[14px]"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button>Add to List</Button>
    </form>
  );
};

export default AddTodoForm;
