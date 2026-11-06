import { useState } from "react";
import { type Todo, addItem, deleteItem, updateItem } from "./todosContext";
import { useTodoContext} from "./TodoContext";

export default function ReactContextTodoList() {
  const {todos, setTodos} = useTodoContext();
  console.log(typeof(todos))
  const [newElem, setNewElem] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const [editorId, setEditorId] = useState(0);
  const [editorValue, setEditorValue] = useState("");
  return (
    <>
      <ul className="p-3">
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            - {todo.title}
            <button
              type="button"
              className="ms-4 me-2 rounded bg-green-600 px-1 text-sm font-medium text-white"
              onClick={() => {
                setEditorValue(todo.title);
                setEditorId(todo.id)
                setShowEditor(!showEditor);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="rounded bg-red-600 px-1 text-sm font-medium text-white"
              onClick={() => setTodos(deleteItem(todos, todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newElem}
        placeholder="New element..."
        onChange={(e) => setNewElem(e.target.value)}
        className="rounded border border-neutral-300 px-3 py-1.5 me-2"
      />
      <button
        type="button"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => {
            addItem(todos, newElem); 
            setNewElem("");
        }}
      >
        Add element
      </button>
      {showEditor === true && (
        <>
          <input
            type="text"
            value={editorValue}
            placeholder="New name..."
            onChange={(e) => setEditorValue(e.target.value)}
            className="rounded border border-neutral-300 px-3 py-1.5 me-2"
          />
          <button
            type="button"
            className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => {
                updateItem(todos, editorId, editorValue);
                 setShowEditor(false);
                }}
          >
            Save edit
          </button>
        </>
      )}
    </>
  );
}