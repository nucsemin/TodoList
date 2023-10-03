import { useEffect } from "react";
import { useTodos } from "./application/useTodos";
import { Form } from "./components/Form/Form";
import { TodoList } from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const { fetchTodos } = useTodos((state) => state);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
      <div className="app">
        <h2 className="title">TODO APP</h2>
        <Form />
        <TodoList />
      </div>
  );
}

export default App;
