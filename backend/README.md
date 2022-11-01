# ReVU Backend
This is the React Native backend for the ReVU project.

## Getting Started
1. Make sure you have node installed.
2. Run `npm install`
4. Running the sample with `npx nodemon server.js`
5. Go to https://localhost:3000 and you should be "Hello World" as the display.

# ReVU: Backend Testing
This README file contains instructions and descriptions for how to test the backend server for the ReVU project.

## Setup Instructions
1. Make sure you have node installed.
2. Run `npm install`
4. Running the sample with `npx nodemon server.js`
5. Go to https://localhost:3000 and you should be "Hello World" as the display.

## Endpoint Tests
1. /post/newRating
* curl -X POST -H 'Content-Type: application/json' -d "{\`"userId\`": \`"\<ID\>\`", \`"diningHallId\`": \`"\<ID\>\`", \`"type\`": \`"\<food or traffic\>\`", \`"rating\`": \`"\<num\>\`"}" localhost:3000/api/post/newRating
2. /getAll/userRatings/:userId
* curl localhost:3000/api/getAll/userRatings/\<ID\>
3. /getAll/foodRatings/:diningHallId
* curl localhost:3000/api/getAll/foodRatings/\<ID\>
4. /getAll/trafficRatings/:diningHallId
* curl localhost:3000/api/getAll/trafficRatings/\<ID\>
5. 

## Expected Results



