import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { removeTodo } from '../store/todoSlice'

function Todos() {
  const todos = useSelector(
    (state) => state.todos,
    shallowEqual
  )

  const dispatch = useDispatch()

  const handleRemove = useCallback(
    (id) => dispatch(removeTodo(id)),
    [dispatch]
  )

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6
                    bg-slate-800 border border-slate-600
                    rounded-2xl shadow-xl"
    >
      <h1 className="text-2xl font-semibold text-purple-400 mb-6">
        Todos
      </h1>

      <ul className="space-y-4">
        {todos.length === 0 && (
          <li className="text-slate-400 text-sm text-center py-6">
            No todos yet ✨
          </li>
        )}

        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between
                       px-5 py-3 bg-slate-700
                       rounded-xl border border-slate-600
                       hover:border-purple-500
                       hover:bg-slate-600
                       transition-all duration-200"
          >
            <span className="text-slate-100 text-base wrap-break-word">
              {todo.text}
            </span>

            <button
              onClick={() => handleRemove(todo.id)}
              aria-label="Remove todo"
              className="ml-4 text-sm font-medium
                         px-3 py-1.5 rounded-lg
                         bg-purple-500 hover:bg-purple-600
                         text-white
                         active:scale-95
                         focus:outline-none focus:ring-2
                         focus:ring-purple-400
                         transition-all duration-200"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
