"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Tarefa from "./tarefa";

const url = "http://localhost:1234/tarefas";

export default function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const carregar = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTarefas(data);
  }

  useEffect(() => {carregar()}, []);

  return (
    <main className={styles.main}>
      <h1>Todo list</h1>
      <form>
        <input className={styles.input} value={input} onChange={e => setInput(e.target.value)} />
        <button
          className={styles.button}
          onClick={async (e) => {
          e.preventDefault();
          await fetch(url, {
            method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ texto: input, feito: false }),
          });
          setInput("");
          await carregar();
        }}>
          <img src="https://super.so/icon/light/plus.svg" />
        </button>
      </form>
      <ul>
        {tarefas.map(tarefa => (
          <Tarefa id={tarefa.id}
            texto={tarefa.texto}
            feito={tarefa.feito}
            atualizar={carregar}
          />
        ))}
      </ul>
    </main>
  );
}
