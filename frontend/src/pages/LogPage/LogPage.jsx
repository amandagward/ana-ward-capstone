import { useEffect, useState } from "react";
import axios from "axios";
import ActivityCard from "../../components/Activity/Activity";
import "./LogPage.scss";

export default function LogPage() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        const fetchActivities = async () => {
            const response = await axios.get(
                `http://localhost:8080/activities`
            );
            setActivities(response.data);
        };
        fetchActivities();
    }, []);

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

    const onActivityDelete = (activity) => {
        console.log(activities.filter((e) => e.id != activity.id))
        setActivities(activities.filter((e) => e.id != activity.id));
    }

    return (
        <div className="LogPage">
            <h2>Activity Log</h2>
            <section className="log-wrapper">
                {activities.map((activity) => {
                    return <ActivityCard key={activity.id} activity={activity} tasks={tasks} onActivityDelete={onActivityDelete}></ActivityCard>
                })}
            </section>
        </div>
    )
}