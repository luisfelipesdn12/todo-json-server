import Image from "next/image";
import styles from "./page.module.css";

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
        <li>
          <input type="checkbox" />
          <p>Tarefa 1</p>
          <button className="delete">
            <img src="https://super.so/icon/light/trash-2.svg" alt="Apagar"/>
          </button>
        </li>
        <li>
          <input type="checkbox" />
          <p>Tarefa 1</p>
          <button className="delete">
            <img src="https://super.so/icon/light/trash-2.svg" alt="Apagar"/>
          </button>
        </li>
        <li>
          <input type="checkbox" />
          <p>Tarefa 1</p>
          <button className="delete">
            <img src="https://super.so/icon/light/trash-2.svg" alt="Apagar"/>
          </button>
        </li>
      </ul>
    </main>
  );
}
