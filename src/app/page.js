import styles from "./page.module.css";
import Task from "./task";

export default function Home() {
  const tasks = [
    {
      "id": "1",
      "name": "Tarefa 1",
      "done": false
    },
    {
      "id": "1",
      "name": "Tarefa 2",
      "done": true
    },
    {
      "id": "1",
      "name": "Tarefa 6",
      "done": false
    },
  ];

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
        {tasks.map(task => (
          <Task key={task.id} name={task.name} done={task.done} />
        ))}
      </ul>
    </main>
  );
}
