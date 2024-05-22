export default function Task(props) {
    return (
        <li>
            <input type="checkbox" />
            <p>{props.name}</p>
            <button className="delete">
                <img src="https://super.so/icon/light/trash-2.svg" alt="Apagar" />
            </button>
        </li>
    );
}
