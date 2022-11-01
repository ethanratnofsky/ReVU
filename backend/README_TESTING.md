# ReVU: Backend Testing
This README file contains instructions and descriptions for how to test the backend server for the ReVU project.

## Setup Instructions
1. Make sure you have node installed.
2. Run `npm install`
4. Running the sample with `npx nodemon server.js`
5. Go to http://localhost:3000 and you should be "Hello World" as the display.

## Endpoint Test Commands
1. `/post/createRating`
    ```
    curl -X POST -H 'Content-Type: application/json' -d "{\'userId\': \'\<ID\>\', \'diningHallId\': \'\<ID\>\', \'type\': \'\<food or traffic\>\', \'rating\': \'\<num\>\'}" localhost:3000/api/post/newRating
    ```
2. `/getAll/userRatings/:userId`
    ```
    curl localhost:3000/api/getAll/userRatings/\<ID\>
    ```
3. `/getAll/foodRatings/:diningHallId`
    ```
    curl localhost:3000/api/getAll/foodRatings/\<ID\>
    ```
4. `/getAll/trafficRatings/:diningHallId`
    ```
    curl localhost:3000/api/getAll/trafficRatings/\<ID\>
    ```
5. `/patch/updateRating/:diningHallId/:userId/:type`
    ```
    curl -X PATCH
        -H 'Content-Type: application/json'
        -H 'Accept: application/json'
        -d "{\'userId\': \'\<ID\>\', \'diningHallId\': \'\<ID\>\', \'type\': \'\<food or traffic\>\', \'rating\': \'\<num\>\'}" localhost:3000/api/patch/updateRating
    ```
    Expected output: `[{"_id":"6360a7d3c6c6aa128ca27be7","userId":1,"diningHallId":1,"type":"food","rating":5,"__v":0}]`
6. `/delete/allRatings`
    ```
    curl -i -X DELETE http://localhost:3000/api/delete/allRatings
    ```
7. `/post/createComment`
    ```
    curl -X POST -H 'Content-Type: application/json' -d "{\'userId\': \'\<ID\>\', \'diningHallId\': \'\<ID\>\', \'content\': \'\<content\>\', \'rating\': \'\<num\>\'}" localhost:3000/api/post/createComment
    ```
8. `/getAll/diningComments/:diningHallId`
    ```
    curl localhost:3000/api/getAll/diningComments/\<ID\>
    ```
9. `/delete/delComment`
    ```
    curl -i -X DELETE localhost:3000/api/delete/delComment
    ```
10. `/post/newComplaint`
    ```
    curl -X POST -H 'Content-Type: application/json' -d "{\'userId\': \'\<ID\>\', \'diningHallId\': \'\<ID\>\', \'contact\': \'\<contact name\>\', \'content\': \'\<content str\>\', \'urgency\': \'\<num\>\'}" localhost:3000/api/post/newComplaint
    ```
11. `/getAll/complaints`
    ```
    curl localhost:3000/api/getAll/complaints
    ```
12. `/getAll/overallRatings/:diningHallId`
    ```
    curl localhost:3000/api/getAll/overallRatings/<ID>
    ```

## Expected Results



