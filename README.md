# ana-ward-capstone
Final Assignment for the BrainStation Software Engineering Program

## Installation Instructions

via Terminal 

To run the backend:
- cd backend
- npm i 
- npm start
To recompile the frontend:
- cd frontend
- npm i
- npm run build

## Project Title
Tooth Social

# Initial Proposal

## Overview
<!-- What is your app? Give a brief description in a couple of sentences. -->
Tooth Social is an app that allows your to track your daily dental health tasks.

_Please note that Tooth Social is not the final name and will be changed prior to market launch._

### Problem Space
<!-- Why is your app needed? Give any background information around any pain points or other reasons. -->
Tooth Social is an app where you can track the completion of daily tasks related to your dental care. Quantifying this data allows users to better understand their current dental health, identify key areas for improvement, and make changes to your habits where necessary. Caring for your teeth may be difficult for many reasons, whether you need a reminder to brush before bed or incentive to floss after meals when you really don't feel like it. Tooth Social helps you create and keep healthy habits regarding your oral healthcare. 

### User Profile
<!-- Who will use your app? How will they use it? Add any special considerations that your app must take into account. -->
The beauty of this app is that it can be used by anyone. Initially, our customer profiles include:
    - those who want to track their dental habits
    - those who need to improve their dental health
    - those who are simply curious about their personal health
Expectedly, this app can be used by almost all ages and can help anyone, anywhere account for their dental health in order to improve it.

### Features
<!-- List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented. -->
- As a user, I want to be able to log when I have
    - brushed my teeth
    - flossed my teeth
    - used mouthwash
    - completed an "Other" dental care task
- As a user, I want to be able to have access to an activity log that outlines each time I have completed the above tasks.

## Implementation

### Tech Stack
<!-- List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations. -->
- React
- Express
- Client libraries:
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express

### APIs
<!-- List any external sources of data that will be used in your app. -->
- No external APIs will be used for the first sprint

### Sitemap
<!-- List the pages of your app with brief descriptions. You can show this visually, or write it out. -->
- Home Page
- Activity Log Page
- Add New Task Page

### Mockups
<!-- Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma. -->
A mockup of each page listed above can be found on this [Figma Board](https://www.figma.com/board/yJLz4zaRoZbcPPOitLDwE6/Tooth-Social?node-id=0-1&t=c5IDXhYs6dH6Z91t-1). Please request edit accesss should you wish to leave feedback on this page.

### Data
<!-- Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.  -->
Data will be structured and pulled based on the endpoints below

### Endpoints
<!-- List endpoints that your server will implement, including HTTP methods, parameters, and example responses. -->
Custom Express API Server Endpoints:
- GET logs for brush, floss, and mouthwash to display past activities
    - GET /log/:id/brush
    - GET /log/:id/floss
    - GET /log/:id/mouthwash
- POST new logs for brush, floss, and mouthwash to log new activities
    - POST /log/:id/brush
    - POST /log/:id/floss
    - POST /log/:id/mouthwash
- DELETE
    - DELETE /log/:id/brush
    - DELETE /log/:id/floss
    - DELETE /log/:id/mouthwash

## Roadmap
<!-- Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.  -->

- Create GitHub Repository & Create README.md

- create HTML and CSS files for each page

- Define and break up components for each page

- Set up file folder structure

- Create Data Endpoints

- Define routes using react-router-dom

- Bug Fixes

- Define Design concepts and Style Guide

- Styling & Responsive Design

- Assignment Due Date

- Additional Fixes or Styling Changes

- Prepare Presentation

- Demo Day

---

## Future Implementations
<!-- Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date. -->
In future, I would like to implement the following improvements to the app:
1. Implement user ID validation and the ability to create an account/log into that account
2. The ability to add other users as friends
3. An activity feed to show an activity feed with friend's logged activities
4. Notifications
    - Notify user when it is time to complete a dental health task
    - Notify usser when friends have updated their activities
