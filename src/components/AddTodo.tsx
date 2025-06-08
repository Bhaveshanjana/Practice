"use client";

import { useTodos } from "@/context/Todos";
import React, { FormEvent, useState } from "react";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-black dark:text-white text-center text-3xl mt-12 ">
        toDo using typescript+next.js
      </h1>
      <div className="flex justify-center text-center">
        <ul className="flex gap-28 mt-6 text-xl border-b-2 border-gray-400">
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>
      <form onSubmit={handleOnSubmit} className="text-center mt-8 ">
        <div className="space-x-4">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-2xs  border py-1 rounded-md dark:bg-gray-900"
          />
          <button
            type="submit"
            className="bg-red-500 px-4 py-1 rounded-sm hover:bg-amber-600 transition-colors duration-200 text-gray-900 hover:text-white cursor-pointer shadow-md shadow-gray-600 hover:scale-110"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
