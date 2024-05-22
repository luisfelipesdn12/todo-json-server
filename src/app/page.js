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

export async function createTask(task) {
  try {
      // 1 - Criandro body em string
      const body = JSON.stringify(task);

      // 2 - Preparando cabecalho POST
      const options = {
          method: 'POST',
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: body,
      }

      // 3 - Fetch
      let response = await fetch("http://localhost:4002/tasks", options);

      // 4 - Convertendo para JSON
      let data = await response.json();
      return data;
  } catch (error) {
      console.error("ERROR: creating task");
  }
}

export default function Home() {
  // nome atual, task sendo criada, valorDoInput
  const [currentName, setCurrentName] = useState([]);
  const [tasks, setTasks] = useState([]);

  const readTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  }

  const addTask = async (task) => {
    const data = await createTask(task);
    setTasks(prev => [...prev, data]);
  }

  useEffect(() => {
    readTasks();
  }, []);

  return (
    <main className={styles.main}>
      <h1>Lista de tarefas</h1>
      <form>
        <input
          value={currentName}
          type="text" placeholder="Digite a tarefa..."
          onChange={e => setCurrentName(e.target.value)} />
        <button onClick={(e) => {
          e.preventDefault();
          if (currentName !== "") {
            addTask({ name: currentName, done: false });
            setCurrentName("");
          }
        }}>
          <img src="https://super.so/icon/light/plus.svg" alt="+" />
        </button>
      </form>
      <ul>
        {tasks.length == 0 ? (
          <p>Nenhum item...</p>
        ) : tasks.map(task => (
          <Task key={task.id} id={task.id} name={task.name} done={task.done} readTasks={readTasks} />
        ))}
      </ul>
    </main>
  );
}
