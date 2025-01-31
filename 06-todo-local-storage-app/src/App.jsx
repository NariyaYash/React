import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './Context/Componentd/TodoForm'
import { TodoProvider } from './Context/TodoTask'
import TodoItem from './Context/Componentd/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((pre) => [{ id: Date.now(), ...todo }, ...pre])
  }

  const updateTodo = (id, UpdateTodo) => {
    setTodos((per) => per.map((todo) => todo.id === id ? { ...todo, todo: UpdateTodo } : todo))
  }
  const deleteTodo = (id) => { setTodos((pre) => pre.filter((todo) => todo.id != id)) }
  const isCompleted = (id, complete) => { setTodos((pre) => todos.map((todo) => id === todo.id ? { ...todo, complete } : todo)) }

  useEffect(() => {
    const todos = JSON.parse((localStorage.getItem('todos')));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{
      todos,
      addTodo,
      updateTodo,
      deleteTodo,
      isCompleted
    }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
