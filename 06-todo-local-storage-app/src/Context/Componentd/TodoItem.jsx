import React, { useState, useRef } from 'react'
import useTodo from '../TodoTask';

function TodoItem({ todo }) {
  let inputRef = useRef();
  const { deleteTodo, updateTodo, isCompleted } = useTodo();
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(todo.complete);

  const editTodo = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    if (todoMsg === '') {
      window.alert("You can't save empty todo");
      setTodoMsg(todo.todo);
      setIsTodoEditable(false);
      return;
    }
    updateTodo(todo.id, todoMsg);
    setIsTodoEditable(false);
  }


  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  w-full text-black ${todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.complete}
        onChange={() => isCompleted(todo.id, !todo.complete)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.complete ? "line-through" : ""}`}
        value={todoMsg}
        ref={inputRef}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={(e) => {
          if (todo.complete) return;

          if (isTodoEditable) {
            editTodo(e);
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.complete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem