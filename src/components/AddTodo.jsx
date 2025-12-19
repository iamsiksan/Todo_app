import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    

    <form
      onSubmit={addTodoHandler}
      className="flex items-center gap-3 p-4 max-w-md mx-auto
                 bg-slate-900 rounded-xl shadow-lg border border-gray-800"
    >
      <input
        type="text"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-100 px-4 py-2 rounded-lg
                   bg-slate-800 text-gray-100 placeholder-gray-400
                   border border-gray-700
                   focus:outline-none focus:ring-2 focus:ring-purple-500
                   focus:border-transparent"
      />

      <button
        type="submit"
        className="px-5 py-2 cursor-pointer rounded-lg font-medium text-white
                   bg-purple-600 hover:bg-purple-700
                   active:scale-95 transition-all duration-200
                   shadow-md shadow-purple-900/40"
      >
        Add
      </button>
    </form>
    
  )
}

export default AddTodo
