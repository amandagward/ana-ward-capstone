import express from 'express';
import tasks from '../data/tasks.json' with {type: "json"};

const router = express.Router();

router.get("/", function (request, response) {
    response.json(tasks);
});

export default router;
// imported to index.js as taskRoutes