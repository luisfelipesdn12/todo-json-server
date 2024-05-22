export default function Task(props) {
    return (
        <li>
            <input type="checkbox" checked={props.done} />
            <p>{props.name}</p>
            <button className="delete">
                <img src="https://super.so/icon/light/trash-2.svg" alt="Apagar" />
            </button>
        </li>
    );
}
