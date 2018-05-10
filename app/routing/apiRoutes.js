const path = require("path");
const _ = require('lodash');


let friends = require('../data/friends.js')

module.exports = function(app){
    //this route displays all the available friends
    app.get("/api/users", function(req, res) {
        return res.json(friends);
    });

    //this route posts current instance to friends.js
    app.post("/api/users", function(req, res) {

        var user = req.body;

        friends.push(user);

        res.json(user);

        console.log(user);

    });

    // app.get("/api/users", function(req, res) {

    //     return res.json(friends);
       
    // });


}
