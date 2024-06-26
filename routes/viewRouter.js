const express = require("express");
const userController = require("../controllers/userController");
const playController = require("../controllers/playController");

const router = express.Router();

router.get("/login", (req, res) => {
  res.status(200).render("login", {
    title: "Login",
  });
});

router.get("/register", (req, res) => {
  res.status(200).render("signup", {
    title: "Register",
  });
});

// Just to check if user is logged in or not so that the header can render accordingly
router.use(userController.isLoggedIn);

router.get("/leaderboard", async (req, res) => {
  const users = await playController.getDashboardView();
  res.status(200).render("leaderboard", {
    title: "Dashboard",
    users,
  });
});

router.get("/", (req, res) => {
  res.status(200).render("index", {
    title: "Home",
  });
});

router.use(userController.protect);

router.get("/play", async (req, res) => {
  const question = await playController.getViewQuestion(req);
  res.status(200).render("play", {
    question,
    title: "Play",
  });
});

router.get("/_eTFrIE0bMA", async (req, res) => {
  const question = await playController.getViewQuestion(req);
  res.status(200).render("level8", {
    question,
    title: "ebuTouY",
  });
});

router.get("/story", async (req, res) => {
  const question = await playController.getViewQuestion(req);
  res.status(200).render("story", {
    question,
    title: "Story",
  });
});

router.get("/newQuestion", async (req, res) => {
  res.status(200).render("addQuestion", {
    title: "New Question",
  });
});

module.exports = router;
