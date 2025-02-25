import crypto from "crypto";
import fs, { writeFile } from "fs";
import express from "express";
import activities from "../data/activities.json" with {type: "json"};
import tasks from "../data/tasks.json" with {type: "json"};

const router = express.Router();

// Retrieve all Activities from Activity Log 
router.get("/", function (request, response) {
    response.json(activities);
});

// Post new Activity to Activity Log
router.post("/:task", function (request, response) {
    const newActivity = {
        "id": crypto.randomUUID(),
        "task": request.params.task,
        "timestamp": new Date().getTime(),
    }
    activities.push(newActivity);
    fs.writeFile("./data/activities.json", JSON.stringify(activities, null, "\t"), "utf8", (err) => {
        console.log("Failed to create Activity", err)
    });
    response.json(newActivity);
});

// Update an existing Activity from Activity Log
router.put("/:id", function (request, response) {
    const activity = activities.find((e) => e.id === request.params.id);
    if (activity === undefined) {
        response.status(404).send("Activity not found")
        return
    }
    if (tasks.indexOf(request.body.task) === -1) {
        response.status(404).send("Invalid task type")
        return
    }
    activity.task = request.body.task
    const activityIndex = activities.findIndex((e) => e.id === request.params.id);
    activities[activityIndex] = activity;
    fs.writeFile("./data/activities.json", JSON.stringify(activities, null, "\t"), "utf8", (err) => {
        console.log("Failed to update", err)
    });
    response.status(200).json({ id: request.params.id });
})

// Delete an Activity from Activity Log
router.delete("/:id", function (request, response) {
    const activityIndex = activities.findIndex((e) => e.id === request.params.id);
    if (activityIndex === -1) {
        response.status(404).send("Activity not found")
    }
    else {
        activities.splice(activityIndex, 1)
        fs.writeFile("./data/activities.json", JSON.stringify(activities, null, "\t"), "utf8", (err) => {
            console.log("Failed to delete", err)
        });
        response.status(200).json({ id: request.params.id });
    }
})

export default router;
// imported to index.js as activityRoutes