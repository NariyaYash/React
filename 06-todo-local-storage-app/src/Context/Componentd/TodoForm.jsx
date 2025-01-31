import React, { useState,useRef} from 'react'
import useTodo from '../TodoTask';

function TodoForm() {
  let inputRef = useRef();
  const {addTodo} = useTodo();
  const [todo, setTodo] = useState('');
  const add = (event) => {
      event.preventDefault();
      inputRef.current.focus();
      if(todo === '') return window.alert('Please write something');
      addTodo({todo:todo,complete:false});
      setTodo('');  
  } 

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  )
}

export default TodoForm