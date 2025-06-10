"use client";

import { useTodos } from "@/context/Todos";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { Todos, toggleTodoAscompleted, handleDeleteTodo } = useTodos();
  let filterTodo = Todos;

  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todo");

  if (todosFilter === "active") {
    filterTodo = filterTodo.filter((todo) => !todo.completed);
  } else if (todosFilter === "completed") {
    filterTodo = filterTodo.filter((todo) => todo.completed);
  }
  return (
    <div>
      <ul className=" text-center mt-9 border-y w-sm mx-auto">
        {filterTodo.map((val, index) => {
          return (
            <li key={index} className="my-2 space-x-2 grid grid-cols-3">
              <input
                className="cursor-pointer peer"
                type="checkbox"
                name=""
                id={`todos-${val.id}`}
                checked={val.completed}
                onChange={() => toggleTodoAscompleted(val.id)}
              />
              <label
                htmlFor={`todo-${val.id}`}
                className="text-lg peer-checked:line-through"
              >
                {val.task}
              </label>

              <button
                type="button"
                onClick={() => handleDeleteTodo(val.id)}
                className="p-0.5 px-2 bg-gray-300 rounded-sm hover:bg-amber-600 transition-colors duration-200 text-gray-900 hover:text-white cursor-pointer shadow-md shadow-gray-600 hover:scale-110 "
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
