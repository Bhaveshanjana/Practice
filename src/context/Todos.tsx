"use client";

import { createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  createdAt: Date;
  completed: boolean;
};

export type TodoContext = {
  Todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAscompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const Todocontext = createContext<TodoContext | null>(null);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [Todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newtodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newtodos;
    });
  };

  const toggleTodoAscompleted = (id: string) => {
    setTodos((prev) => {
      const newtodos = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return newtodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      const newtodos = prev.filter((task) => task.id !== id);
      return newtodos;
    });
  };
  return (
    <Todocontext.Provider
      value={{ Todos, handleAddTodo, toggleTodoAscompleted, handleDeleteTodo }}
    >
      {children}
    </Todocontext.Provider>
  );
};

export function useTodos() {
  const todosContextValue = useContext(Todocontext);
  if (!todosContextValue) {
    throw new Error("error in todo context");
  }
  return todosContextValue;
}
