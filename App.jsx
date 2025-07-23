import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);
  const [editText, seteditText] = useState("");
  const [editindex, seteditindex] = useState(null);

  const addTodo = () => {
    setTodo([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    const update = [...todos];
    update[index].done = !update[index].done;
    setTodo(update);
  };

  const Deletebtn = (index) => {
    const filters = todos.filter((_, i) => i !== index);
    setTodo(filters);
  };

  const startedit = (index) => {
    seteditindex(index);
    seteditText(todos[index].text);
  };

  const Submitedit = () => {
    const update = [...todos];
    update[editindex].text = editText;
    setTodo(update);
    seteditindex(null);
    seteditText("");
  };

  const canceledit = () => {
    seteditindex(null);
    seteditText("");
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, idx) => (
          <li
            key={idx}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {editindex === idx ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => seteditText(e.target.value)}
                />
                <button onClick={Submitedit}>✅</button>
                <button onClick={canceledit}>❌</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleDone(idx)}
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => startedit(idx)}>✏️</button>
                <button onClick={() => Deletebtn(idx)}>🗑️</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
