import { createContext, useContext, useState, type ReactNode } from "react";
import { type Todo, startingDos } from "./todosContext";


export type TodoState = {
  todos: Todo[];
  setTodos: (toDos: Todo[]) => void;
};

const TodoContext = createContext<TodoState | null>(null);

export default function TodoContextProvider({children}: {children: ReactNode;}) {
  const [doState, setTodoState] = useState(startingDos);
  return (
    <TodoContext.Provider value={{ todos: doState, setTodos: setTodoState }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const cntxt = useContext(TodoContext);
  if (!cntxt) {
    throw new Error("out of scope");
  }
  return cntxt;
}
