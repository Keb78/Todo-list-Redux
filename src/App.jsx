import { useState } from "react";
import { addTodo, deleteTodo, doneTodo, useTodos } from "./redux/todos";
import "./App.css";

function App() {
  const [text, setText] = useState();
  const todoListObject = useTodos();
  const list = todoListObject.todoList;

  function handleDone(id, done) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      if (item.id == id) {
        item.done = !done;
      }
    }

    doneTodo({ id, done });
  }

  function handleDelete(id) {
    deleteTodo(id);
  }

  function handleAdd() {
    const todo = {
      title: text,
      done: false,
      id: Date.now(),
    };

    addTodo(todo);
  }

  return (
    <div className="App bg-purple-200">
      <input
        className="outline-indigo-500 shadow-md"
        type="text"
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className="bg-indigo-500 rounded-md text-xl px-4 text-slate-200 ml-4"
        onClick={handleAdd}
      >
        Add
      </button>

      {list.map((item) => {
        return (
          <div className={item.done && "done"}>
            {item.title} {item.id} {item.done ? "Done" : "Not Done"}
            <button
              className="bg-indigo-500 rounded-md text-xl px-4 text-slate-200"
              onClick={() => handleDone(item.id, item.done)}
            >
              {item.done ? "Undo" : "Done"}
            </button>
            <button
              className="bg-indigo-500 rounded-md text-xl px-4 text-slate-200"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
