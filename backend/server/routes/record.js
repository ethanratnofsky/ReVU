const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// Skeleton for GET
// TODO find path
// TODO find collection name
recordRoutes.route("path").get(async function (req, res) {
    dbConnect
        .collection("Comments")
        .find({}).limit(50)
        .toArray(function (err, result) {
            if(err) {
                res.status(400).setDefaultEncoding("Error fetching comments");
            } else {
                res.json(result);
            }
        });
});

recordRoutes.route("path.to.comments").post(function (req, res) {
    const dbConnect = dbo.getDb();
    const user_comment = {
        comment_id: req.body.id,
        dining_id: req.dining_id, // Fix probably
        conent: new String(),
        votes: new Int(), // init to 0?
        date_posted: new Date(),
        // Other info?
    };

    dbConnect
        .collection("comments") // idk what this means
        .insertOne(matchDocument, function (err, result) {
            if(err) {
                res.status(400).send("Error ");
            } else {
                console.log('Added a new comment with id ${result.}');
                res.status(204).send();
            }
        });
});