import { useEffect, useState } from "react";
import axios from "axios";
import "./Activity.scss";

export default function ActivityCard({ activity, tasks, onActivityDelete }) {

    const [task, setTask] = useState(activity.task);

    const handleDeleteActivity = async () => {
        await axios.delete(
            `http://localhost:8080/activities/${activity.id}`,
            { "Content-Type": "application/json" }
        )
        console.log(onActivityDelete)
        onActivityDelete(activity)
    }

    const handleUpdateActivity = async (task) => {
        setTask(task)
        await axios.put(
            `http://localhost:8080/activities/${activity.id}`,
            { task: task },
            { "Content-Type": "application/json" }
        );
    }

    return (
        <div className="activity-wrapper">
            <select value={task} onChange={e => handleUpdateActivity(e.target.value)}>
                {tasks != undefined && tasks.map((task) => {
                    return <option value={task} key={task}> {task} </option>
                })}</select>
            <p className="activity_date">{new Date(activity.timestamp).toLocaleString()}</p>
            <button onClick={handleDeleteActivity}>delete</button>
        </div>
    )
}