
import { useState } from "react";
import { useTodos } from "../../application/useTodos";
import s from "./Form.module.scss";

export const Form = () => {
  const { addTodo } = useTodos((state) => state);
  const [title, setTitle] = useState('')

  const changeHandler = (e) => {
    setTitle(e.target.value)
  }

  const addHandler = (e) => {
    e.preventDefault();
    if (title.length) {
      const todo = {
        reason: title,
        complete: false
      };
      addTodo(todo)
      setTitle('')
    }
  };

  return (
    <form
    onSubmit={addHandler}
    className={s.form}
  >
    <div>
      <input
        value={title}
        onChange={changeHandler}
        placeholder="what you need to be done?"
        type="text"
        className={s.input}
      />
    </div>

    <button type="submit">
      +
    </button>
  </form>
  );
};
