import React from "react";
import { AddTodo } from "../components/AddTodo";
import NavBar from "@/components/NavBar/NavBar";
import Providers from "./provider";
import Todos from "@/components/Todos";

const page = () => {
  return (
    <main>
      <Providers>
        <NavBar />
      </Providers>
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;
