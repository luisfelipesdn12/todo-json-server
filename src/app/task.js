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

export async function updateTask(taskId, task) {
    try {
        // 1 - Criandro body em string
        const body = JSON.stringify(task);

        // 2 - Preparando cabecalho POST
        const options = {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: body,
        }

        // 3 - Fetch
        let response = await fetch("http://localhost:4002/tasks/" + taskId, options);

        // 4 - Convertendo para JSON
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("ERROR: updating task");
    }
}

export default function Task(props) {
    return (
        <li>
            <input type="checkbox" checked={props.done} onChange={async (e) => {
                await updateTask(props.id, {
                    name: props.name,
                    done: e.target.checked,
                });
                await props.readTasks();
            }} />
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
