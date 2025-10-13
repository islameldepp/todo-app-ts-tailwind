type DeleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

const DeleteButton = ({ id, onDeleteTodo }: DeleteButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ✖️
    </button>
  );
};

export default DeleteButton;
