import { useEffect, useState } from "react";
import axios from "axios";
import "./AddPage.scss";

export default function AddPage() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get(
                `http://localhost:8080/tasks`
            );
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const handleNewActivity = async (task) => {
        await axios.post(
            `http://localhost:8080/activities/${task}`,
            { "Content-Type": "application/json" }
        );
        alert(`${task} added`);
    }

    return (
        <div className="page-wrapper">
            <h2>Add New Task</h2>
            <h3>Select the task type you want to log</h3>
            <section className="button-wrapper">
                {tasks.map((task) => {
                    return <button key={task} onClick={(e) => handleNewActivity(task)}> {task} </button>
                })}
            </section>
        </div >
    )
}