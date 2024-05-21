const express = require("express");
let router = express.Router();
let User = require("../../Models/User");

router.get("/register", (req, res) => {
  res.render("auth/register");
});
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    res.flash("danger", "User Already Exist");
    return res.redirect("/register");
  }
  user = new User(req.body);
  await user.save();
  res.redirect("/login");
});
router.get("/logout", (req, res) => {
  req.session.user = null;
  res.flash("success", "Logged out Successfully");
  res.redirect("/login");
});
router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.flash("danger", "User with given email doesn't exist");
    return res.redirect("/register");
  }
  if (user.password != req.body.password) {
    res.flash("danger", "Invalid Password");
    return res.redirect("/login");
  }
  req.session.user = user;
  return res.redirect("/index.html");
});
module.exports = router;
