import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <ul className="navbar">
                <li><Link to="/add_task">Add Task</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/activity_log">Task Log</Link></li>
            </ul>
        </div>
    )
}