import { useTodos } from "../../application/useTodos";
import { TodoItem } from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

export const TodoList = () => {
  const { todos } = useTodos((state) => state);

  return (
    <>
      <div className={s.group}>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </div>
    </>
  );
};
