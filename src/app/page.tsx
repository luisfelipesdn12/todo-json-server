"use client";

import Todo from "@/components/todo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { API_URL } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => fetch(API_URL)
    .then(res => res.json())
    .then(setTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-3xl font-bold">To do list</h1>
      <form
        className="flex gap-2 justify-between w-full max-w-[30rem]"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const name = data.get("name") as string;
          e.currentTarget.reset();

          fetch(API_URL, { method: "POST", body: JSON.stringify({ name, done: false }) })
            .then(res => res.json())
            .then(fetchTodos);
        }}
      >
        <Input name="name" placeholder="Type your todo..." className="text-xl" />
        <Button variant="default">
            <PlusIcon/>
          </Button>
      </form>
      <ul className="w-full max-w-[30rem] gap-2 flex flex-col">
        {todos.length ? todos.map((todo, key) => (
          <Todo key={key} data={todo} fetchTodos={fetchTodos} />
        )) : (
          <p className="text-center text-muted-foreground">
            There is no todos...
          </p>
        )}
      </ul>
    </main>
  );
}
