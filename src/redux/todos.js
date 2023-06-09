import { createReduxModule } from "hooks-for-redux";

const initialState = {
  todoList: [],
};

export const [useTodos, { addTodo, deleteTodo, doneTodo }] = createReduxModule(
  "todos",
  initialState,
  {
    addTodo: (state, todo) => {
      return {
        ...state,
        todoList: [...state.todoList, todo],
      };
    },

    deleteTodo: (state, id) => {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== id),
      };
    },

    doneTodo: (state, { id, done }) => {
      const newList = [...state.todoList];

      for (let i = 0; i < newList.length; i++) {
        const item = newList[i];
        if (item.id == id) {
          item.done = !done;
        }
      }

      return {
        ...state,
        todoList: newList,
      };
    },
  }
);
