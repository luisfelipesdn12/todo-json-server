import styles from "./page.module.css";
const url = "http://localhost:1234/tarefas";

export default function Tarefa(props) {
    return (
        <li className={styles.tarefa}>
            <input className={styles.check} type="checkbox" checked={props.feito} onChange={async (e) => {
                await fetch(url + "/" + props.id, {
                    method: 'PUT',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        texto: props.texto,
                        feito: e.target.checked,
                    }),
                })
                await props.atualizar();
            }} />
            <p className={styles.texto}>{props.texto}</p>
            <button className={styles.buttonRemove} onClick={async () => {
                await fetch(url + "/" + props.id, { method: 'DELETE' });
                await props.atualizar();
            }}>
                <img src="https://super.so/icon/light/trash-2.svg" />
            </button>
        </li>
    );
}
