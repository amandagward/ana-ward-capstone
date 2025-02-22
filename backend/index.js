import express from 'express';
import taskRoutes from './routes/tasks.js';
import activityRoutes from './routes/activities.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use('/tasks', taskRoutes);
app.use('/activities', activityRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});