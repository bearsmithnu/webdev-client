"use client";

import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./CounterContextRead";
import ContextCounterWrite from "./CounterContextWrite";
import TodoContextProvider from "./TodoContext";
import ReactContextTodoList from "./ReactContextTodoList";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props through
        the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>

      <hr />

      <TodoContextProvider>
        <ReactContextTodoList />
      </TodoContextProvider>
      <hr />
    </div>
  );
}
