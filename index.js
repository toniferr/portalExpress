// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

/**
app.get("/", (req, res) => {
  res.status(200).send("portalExpress: Example Node.js application with Express");
});
*/
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
})

app.get("/go", (req, res) => {
  res.render("go", { title: "Profile", userProfile: { nickname: "Toni" } });
});


/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
