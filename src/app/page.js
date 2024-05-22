"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Task from "./task";

export async function getTasks() {
  try {
    const response = await fetch("http://localhost:4002/tasks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ERROR: loading tasks");
  }
}

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const readTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  }

  useEffect(() => {
    readTasks();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Lista de tarefas</h1>
      <form>
        <input type="text" placeholder="Digite a tarefa..." />
        <button>
          <img src="https://super.so/icon/light/plus.svg" alt="+" />
        </button>
      </form>
      <ul>
        {tasks.length == 0 ? (
          <p>Nenhum item...</p>
        ) : tasks.map(task => (
          <Task key={task.id} name={task.name} done={task.done} />
        ))}
      </ul>
    </main>
  );
}
