export async function deleteTask(taskId) {
    try {
        // 1 - Preparando cabecalho POST
        const options = {
            method: 'DELETE'
        }
        // 2 - Fetch
        await fetch("http://localhost:4002/tasks/" + taskId, options);
    } catch (error) {
        console.error("ERROR: deleting tasks");
    }
}

export default function Task(props) {
    return (
        <li>
            <input type="checkbox" checked={props.done} />
            <p>{props.name}</p>
            <button className="delete" onClick={async () => {
                await deleteTask(props.id);
                await props.readTasks();
            }}>
                <img src="https://super.so/icon/light/trash-2.svg" alt="Apagar" />
            </button>
        </li>
    );
}
