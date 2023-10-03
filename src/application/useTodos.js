import { create } from 'zustand'

export const useTodos = create((set) => ({
  todos: [],
  fetchTodos: async () => {
      const todos = await fetch("http://localhost:3003/todos")
          .then((res) => res.json())
          .catch(error => console.error(error));

      set((state) => ({ ...state, todos}));
  },

  setIsComplete: (todo) => {
      const options = {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(todo)
      };
      fetch(`http://localhost:3003/todos/${todo.id}`, options)
      .then(response => response.json())
      .catch(error => console.error(error));

      set((state) => ({ todos: state.todos.map((el) => {
          if (el.id === todo.id) {
              return { ...el, complete: todo.complete}
          }
          return el
          }
      )}));
  },

  deleteTodo: (todo) => {
      fetch(`http://localhost:3003/todos/${todo.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .catch(error => console.error(error));

      set((state) => ({ todos: state.todos.filter((el) => el.id !== todo.id)}));
  },

  addTodo: (todo) => {
      const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(todo)
      };
      fetch(`http://localhost:3003/todos/`, options)
          .then(response => response.json())
          .catch(error => console.error(error));

      set((state) => ({ todos: [...state.todos, todo]}));
  }

}));
