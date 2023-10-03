import { useTodos } from "../../application/useTodos";
import { ReactComponent as CloseIcon } from "../../svg/icons8-close.svg";
import s from "./TodoItem.module.scss";

export const TodoItem = ({ todo }) => {
  const { setIsComplete, deleteTodo } = useTodos((state) => state);
  const deleteHandler = () => {
    deleteTodo(todo);
  };

  const completeHandler = (e) => {
    e.preventDefault();
    const data = { id: todo.id, reason: todo.reason, complete: !todo.complete };
    setIsComplete(data);
  };

  return (
    <div className={s.row}>
      <div className={s.nameTodo} onClick={completeHandler}>
        <div className={todo.complete ? s.done : s.inProgress}>
          {todo.reason}
        </div>
      </div>
      <CloseIcon onClick={deleteHandler} />
    </div>
  );
};
