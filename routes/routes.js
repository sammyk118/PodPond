const router = require("express").Router();
const path = require("path");
const pondController = require("../controller/pondController");
const passport = require("../config/passport");
// see guide https://www.sitepoint.com/local-authentication-using-passport-node-js/
// if you want to use connect-ensure-login package as middleware to ensure user is logged in. Can probably just use config/middleware/isAuthenticated.js instead like in project 2.

// Calls methods from pondController

router.post("/api/login", passport.authenticate("local"), function (req, res) {
    console.log("req.user in routes:", req.user);
    res.json(req.user);
});

router.post("/api/signup", function (req, res) {
    pondController.register(req, res);
});

// GET route for logout function
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// saved podcast routes
router.route("/api/savedpodcasts")
    .get(pondController.savedPodcast)
    .post(pondController.saveNewPodcast)

// router.route("/api/podcasts")
  
// delete from saved podcast
// "/api/podcasts/:id"
router.route("/:id")
    .delete(pondController.remove);

router.route("/api/podcasts/comments")
    .post(pondController.newComment)
    .get(pondController.showComments)









// bottom-most, default route. If no other routes are hit --> send React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;