import Image from "next/image";
import styles from "./page.module.css";
import Task from "./task";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Lista de tarefas</h1>
      <form>
        <input type="text" placeholder="Digite a tarefa..." />
        <button>
          <img src="https://super.so/icon/light/plus.svg" alt="+"/>
        </button>
      </form>
      <ul>
        <Task name="Tarefa 1" />
        <Task name="Tarefa 2" />
        <Task name="Tarefa 3" />
        <Task name="Tarefa 1" />
        <Task name="Tarefa 1" />
      </ul>
    </main>
  );
}
